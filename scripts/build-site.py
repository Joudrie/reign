"""Build the shareable site.

usage: python3 scripts/build-site.py --sheets <dir with sheets/*.jpg + manifest.json> --out dist [--base https://joudrie.github.io/reign/]

Inlines every data/*.json deck and the portrait-sheet manifest into prototype/deck.html, wraps it in a full
HTML document (title, description, Open Graph / Twitter card, icons, web manifest) and copies the
static assets from site-assets/. The portrait sheets live on the gh-pages branch (sheets/), built by the
image pipeline; pass the folder that holds them.
"""
import argparse, glob, json, os, shutil
ap = argparse.ArgumentParser()
ap.add_argument('--sheets', required=True)
ap.add_argument('--out', default='dist')
ap.add_argument('--base', default='https://joudrie.github.io/reign/')
a = ap.parse_args()
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
tpl = open(f'{root}/prototype/deck.html').read()
decks = {}
for f in sorted(glob.glob(f'{root}/data/*.json')):
    d = json.load(open(f)); decks[d['id']] = d
real = [d for d in decks.values() if not d.get('fictional')]
n_cards = sum(len(d['reigns']) for d in real)
body = tpl.replace('/*DATA*/null', json.dumps(decks, ensure_ascii=False, separators=(',', ':')).replace('</', '<\\/'))
import datetime
body = body.replace('Version dev', 'Version ' + datetime.datetime.now(datetime.timezone.utc).strftime('%Y-%m-%d %H:%M UTC'))
body = body.replace('/*PICS*/null', open(f'{a.sheets}/manifest.json').read())
body = body.replace('/*ARMS*/null', open(f'{root}/heraldry/arms.json').read())
title = 'Crown & Succession'
desc = f'Every ruler of {len(real)} countries and empires, from the pharaohs to today, told as one swipeable story. {n_cards:,} illustrated cards, a side-by-side timeline and a record-or-rumour quiz.'
head = f'''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="description" content="{desc}">
<meta name="theme-color" content="#f1ece2">
<link rel="canonical" href="{a.base}">
<link rel="icon" href="favicon.svg" type="image/svg+xml">
<link rel="icon" href="icon-192.png" sizes="192x192" type="image/png">
<link rel="apple-touch-icon" href="apple-touch-icon.png">
<link rel="manifest" href="manifest.webmanifest">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="Crowns">
<meta property="og:type" content="website">
<meta property="og:site_name" content="{title}">
<meta property="og:title" content="{title}: every ruler, one story">
<meta property="og:description" content="{desc}">
<meta property="og:url" content="{a.base}">
<meta property="og:image" content="{a.base}og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Crown & Succession: a card for William the Conqueror beside a timeline of rulers">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{title}: every ruler, one story">
<meta name="twitter:description" content="{desc}">
<meta name="twitter:image" content="{a.base}og.png">
'''
# the template starts with <title> and its own <link>/<style>/<script> head content, then the body markup
html = head + body.replace('</style>', '</style>\n</head>\n<body>', 1) + '\n</body>\n</html>\n'
os.makedirs(a.out, exist_ok=True)
open(f'{a.out}/index.html', 'w').write(html)
manifest = {"name": title, "short_name": "Crowns", "description": desc, "start_url": "./", "scope": "./", "display": "standalone",
            "background_color": "#f1ece2", "theme_color": "#f1ece2",
            "icons": [{"src": "icon-192.png", "sizes": "192x192", "type": "image/png"},
                      {"src": "icon-512.png", "sizes": "512x512", "type": "image/png"},
                      {"src": "icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable"},
                      {"src": "favicon.svg", "sizes": "any", "type": "image/svg+xml"}]}
json.dump(manifest, open(f'{a.out}/manifest.webmanifest', 'w'), indent=1)
for f in glob.glob(f'{root}/site-assets/*'):
    if os.path.isdir(f): shutil.copytree(f, f'{a.out}/{os.path.basename(f)}', dirs_exist_ok=True)
    else: shutil.copy(f, a.out)
if os.path.abspath(f'{a.sheets}') != os.path.abspath(f'{a.out}/sheets'):
    shutil.copytree(a.sheets, f'{a.out}/sheets', dirs_exist_ok=True)
open(f'{a.out}/.nojekyll', 'w').close()
print(f'built {a.out}/index.html: {len(decks)} decks, {n_cards} real cards, {len(html)//1024} KB')
