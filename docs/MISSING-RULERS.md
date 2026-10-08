# Known gaps: rulers not yet in the decks

Paused on 2026-10-05 to save usage. Every card is still an unchecked draft that needs a human fact-check.

## Status

- Every deck has one card per ruler except Georgia, which still has some grouped cards. Its batch files exist but the merge failed on a group-id mismatch.
- Missing rulers have been added for: austria, ethiopia, germany, greece, netherlands, ottoman, russia, westeros.
- Egypt: the 14th-16th Dynasty additions are written but not merged. The 13th Dynasty cards that start and end in the same year still need spreading out.
- Not done: the Iran fact-check review, image licence doubts, strict validation of grouped cards, rebuilding and republishing the preview.

## Status (2026-10-08, second checkpoint)

Every row in the audit sections below has now been added, either as its own card or as a named member of an existing card, except where noted. No deck has grouped cards. Checks pass with 0 errors, including STRICT_GROUPS.

- The cards added in the two checkpoints are short (two paragraphs, sourced to Wikipedia) and still need a fact-check.
- Where no portrait exists, the card shows a period image (a coin, a place, a battle, a manuscript) and its caption says no portrait survives. A few of these automatic picks may still be off; check them on the site.
- Iran and Georgia were checked afterwards against the standard king lists; 25 and 4 missing rulers were added.
- Left out on purpose: China's parallel dynasties (Southern Dynasties, Ten Kingdoms, Liao, Jin and so on). That is a scope choice for the China deck, not missing data.

The sections below are the original audit, kept for reference.

## Missing rulers, by deck

Each section below is that deck's audit, which was mostly checked against the auditors' own knowledge because Wikipedia was rate-limiting. Lines read: name | start | end | where | why missing | add as CARD or MEMBER. Decks marked 'None missing' are complete.

### abbasid

Source: Wikipedia was rate-limited (HTTP 429), so this check uses my own knowledge of the standard "List of Abbasid caliphs".

All 37 standard caliphs from al-Saffah to al-Musta'sim have cards. The validator reports no gap longer than 1 year.

Ibrahim ibn al-Mahdi | 0817-07-24 (circa) | 0819-08 (circa) | claimant card placed after reign id al-mamun (overlaps it) | text only (mentioned in the al-mamun card) | recommendation: CARD (kind claimant; he held Baghdad and was proclaimed there, and standard lists give him as an anti-caliph)
Ibn al-Mu'tazz (Abdallah) | 0908-12-17 | 0908-12-18 | after reign id al-muktafi, at the very start of al-muqtadir | text only (mentioned in the al-muqtadir card) | recommendation: CARD (kind claimant; enthroned in Baghdad for one day). Fallback: MEMBER of al-muqtadir

#### Doubts
- Both are usually called anti-caliphs, not caliphs. Include them only if the deck counts claimants who held the capital, as the umayyad deck does with Ibn al-Zubayr.
- Al-Qahir was briefly enthroned during the coup of Feb–Mar 929 against al-Muqtadir. He already has a card for 932–934, so no person is missing, only a 2-day episode.
- Al-Muwaffaq is already a co-ruler on al-mutamid.
- The Cairo shadow caliphs (1261–1517) are left to the epilogue and are out of span.
- al-rashid ends 1136-08-17 and al-muqtafi starts 1136-09-17. The month in between is an interregnum, not a missing ruler.

### belgium

Source: own knowledge; not fetched.

None missing.

#### Doubts
- Regent Érasme-Louis Surlet de Chokier (1831-02-25 → 1831-07-21) and the Provisional Government (1830) precede the first card, so they are outside the deck's span.
- Day-long interregna between kings (e.g. 1865-12-10 → 12-17, 1934-02-17 → 02-23, 1993-07-31 → 08-09) and Baudouin's 1990 "inability to reign" (Council of Ministers) are too brief / collective for cards.
- German military occupation 1940–1944 (Alexander von Falkenhausen) and the Pierlot government in London are not named; could be members of leopold-iii if the deck wants occupiers named.

### bohemia

Checked against Wikipedia "List of Bohemian monarchs" (fetched). Validator gaps: 889–894 (before spytihnev-i) and 1055–1061 (before vratislaus-ii).

Svatopluk I of Great Moravia | 0890c | 0894 | spytihnev-i | gap 889–894; text only in spytihnev-i ("the real boss was Svatopluk of Great Moravia"); Wikipedia marks these years as "Bohemia annexed to Great Moravia" | MEMBER (of spytihnev-i)
Spytihněv II | 1055-01-10 | 1061-01-28 | after bretislaus-i | gap 1055–1061; missing entirely; eldest son of Bretislaus I, duke for six years | CARD
Matthias Corvinus | 1469-05-03 | 1490-04-06 | after george, beside vladislaus-ii (contestedWith george, vladislaus-ii) | text only in vladislaus-ii (and george); elected king by the Catholic estates at Olomouc, ruled Moravia, Silesia and Lusatia, kept the royal title under the Peace of Olomouc 1479; Wikipedia lists him | CARD (kind claimant or monarch)
Charles Albert of Bavaria (Charles VII) | 1741-12-07 (proclaimed in Prague; homage 1741-12-19) | 1742-12-26 (Austrians retook Prague; Maria Theresa crowned 1743-05-12) | after charles-vi, beside maria-theresa (contestedWith maria-theresa) | text only in maria-theresa; held Prague and took the nobles' oath; Wikipedia lists him as anti-king 1741–1743 | CARD (kind claimant)

#### Doubts
- Jaromír is sometimes said to have been installed briefly in early 1003 (between Vladivoj and the return of Boleslaus III). Wikipedia does not list it; not counted.
- Ottokar II was proclaimed "younger king" by rebel nobles and held Prague 1248–1249 against his father Wenceslaus I. He already has a card; could be mentioned in wenceslaus-i.
- Moravian appanage dukes (Olomouc, Brno, Znojmo) in the Wikipedia table are not dukes of Bohemia; skipped. Conrad II of Znojmo was only a rival claimant (1142); skipped.
- Sigismund's card (1419–1437) is contested with the Hussite interregnum card, which names the Hussite leaders as members; fine.
- Regents (Ludmila, Drahomíra, Otto of Brandenburg, George of Poděbrady 1448–1458) skipped as regents of a reigning monarch.

### bulgaria

Source: own knowledge (no Wikipedia fetch made). Validator gaps: simeon-i, samuel, alexander-i.

Dukum | 0814 | 0814 | after reign krum | gap (0814-04 to 0815); text only (krum/omurtag) | CARD (circa; may share one card with Ditseng)
Ditseng | 0814 | 0815 | after Dukum | gap; text only | CARD (circa)
Vladimir Rasate | 0889 | 0893 | after reign boris-i | gap (0889 to 0893); text only (boris-i) | CARD
Roman | 0977 | 0997 (c.; some say 991) | after reign boris-ii / alongside samuel | gap (0971 to 0976) and text only (samuel) | CARD (recognised tsar, Samuel ruled under him)
David, Moses and Aron (Cometopuli) | 0971 (c.) | 0976/0987 | samuel | text only (samuel) | MEMBER (of samuel)
Tihomir | 1040 | 1040 | peter-delyan | not mentioned | MEMBER (of peter-delyan; rebel leader proclaimed before Delyan)
Michael Asen II | 1272 | 1277 | constantine-tikh | not mentioned | MEMBER (of constantine-tikh; crowned co-emperor)
George II Terter | 1322 | 1323 | after reign theodore-svetoslav | gap (1322 to 1323) | CARD
Ivan Stephen | 1330-07-31 | 1331-04 | after reign michael-shishman | gap (1330-07 to 1331); text only | CARD
Ivan Sratsimir | 1356 | 1396 | after reign ivan-alexander (or after ivan-shishman, filling 1395-1396) | text only (ivan-alexander, ivan-shishman) | CARD (tsar at Vidin; last Bulgarian tsar standing)
Russian Provisional Administration (Vladimir Cherkassky, Alexander Dondukov-Korsakov) | 1878-03-03 | 1879-04-29 | after reign ottoman-rule | gap (1878-03 to 1879-04) | CARD (interregnum; Dondukov-Korsakov as Imperial Commissioner, Cherkassky as civil head until his death 1878-03)
Regency of 1886-1887 (Stefan Stambolov, Sava Mutkurov, Petko Karavelov/Georgi Zhivkov) | 1886-09-07 | 1887-07-07 | after reign alexander-i | gap (under a year, not flagged); text only (alexander-i/ferdinand) | CARD (interregnum)

#### Doubts
- Dukum/Ditseng (and possibly Tsok) are attested only in Byzantine chronicles; a joint card "Dukum and Ditseng" fits best.
- 971-976 gap: eastern Bulgaria annexed by John I Tzimiskes; could be an interregnum card naming him and the Cometopuli.
- Roman's end date varies (991 captured, 997 death); Samuel's card starting 976 overlaps him.
- Regency of 1943-1946 (Prince Kiril, Bogdan Filov, Nikola Mihov) skipped as regents of a reigning Simeon II; it is in text.
- Michael Asen IV (co-emperor 1332-1355) skipped as a junior co-ruler.

### burma

Wikipedia was rate-limited; checked against the standard list of 11 Konbaung kings from own knowledge.

None missing.

All 11 kings have cards, including Phaungka's few days in 1782. There are no gaps.

#### Doubts
- None of substance. Only the Konbaung dynasty is in scope; Pagan, Ava, Taungoo and Restored Taungoo are excluded by the deck's own blurb.

### byzantium

Source: own knowledge (no Wikipedia fetch made). Validator gaps: leo-v, constantine-vii, andronikos-i, theodore-i.

Leo II | 0474-01-18 | 0474-11 | after reign leo-i | text only (leo-i card) | CARD
Basiliscus | 0475-01-09 | 0476-08 | inside zeno (after zeno's flight) | text only (leo-i/zeno cards) | CARD (held Constantinople)
Constantine III (Heraclius Constantine) | 0641-02-11 | 0641-05-25 | after reign heraclius | gap (0641-02 to 0641-09); text only | CARD
Heraklonas | 0641-02-11 | 0641-09 | after Constantine III | gap; text only | CARD
Artabasdos | 0741-06 | 0743-11-02 | inside constantine-v | text only (constantine-v) | CARD (held Constantinople c. 742-743)
Staurakios | 0811-07-26 | 0811-10-02 | after reign nikephoros-i | gap (0811-07 to 0813-07); text only | CARD
Michael I Rangabe | 0811-10-02 | 0813-07-11 | after Staurakios | gap; text only | CARD
Alexander | 0912-05-11 | 0913-06-06 | after reign leo-vi | gap (0912-05 to 0913-06) | CARD
Eudokia Makrembolitissa | 1067-05-23 | 1067-12-31 | after reign constantine-x | gap (1067-05 to 1068-01) | CARD (ruling empress-regent; again briefly 1071)
Alexios II Komnenos | 1180-09-24 | 1183-09 | after reign manuel-i | gap (1180-09 to 1183-09) | CARD
John IV Laskaris | 1258-08-16 | 1261-12-25 | after reign theodore-ii | gap (1258-08 to 1259-01); text only (michael-viii) | CARD
Andronikos IV Palaiologos | 1376-08-12 | 1379-07-01 | inside john-v | text only (john-v, unnamed) | CARD (held Constantinople)
John VII Palaiologos | 1390-04-14 | 1390-09-17 | inside john-v | text only (john-v) | CARD (held Constantinople)
Stephen and Constantine Lekapenos | 0944-12-16 | 0945-01-27 | inside constantine-vii | not mentioned | MEMBER (of constantine-vii)
Nicholas Kanabos | 1204-01-27 | 1204-02-05 | between isaac-ii-and-alexios-iv and alexios-v | text only | MEMBER (of alexios-v or isaac-ii-and-alexios-iv; proclaimed but never held the palace)

#### Doubts
- Kanabos could be a CARD if the deck counts every acclaimed emperor.
- Constantine Laskaris (possibly proclaimed April 1204) skipped: disputed existence of a reign.
- Junior co-emperors skipped: Michael IX (1294-1320), Matthew Kantakouzenos (1353-1357), Constantine Doukas, Christopher Lekapenos. Matthew could be a MEMBER of john-vi.
- 963-03 to 963-08 gap: Basil II and Constantine VIII nominally reigned (they have later cards); not listed as missing.
- Latin emperors (1204-1261) are out of scope as the deck follows Nicaea.

### china

Wikipedia was rate-limited (HTTP 429); checked against the standard lists of Chinese emperors and PRC/ROC leaders from own knowledge.

Scope: the deck follows one line of "main" emperors per era. That line runs Qin → Han → Xin → Han → Cao Wei → Jin → Northern Wei → Western Wei → Northern Zhou → Sui → Tang (with Wu Zhou) → Five Dynasties → Northern/Southern Song → Yuan → Ming → Qing → ROC → PRC. Then it covers de facto leaders (Empress Lü, Cao Cao, Cixi, Sun and Yuan, Chiang, the paramount leaders). Within that line every legitimate emperor has a card. The missing people listed below are (a) rulers inside date gaps, (b) usurpers or rival emperors who actually held the capital, and (c) emperors who are only mentioned in another card's text.

#### Missing rulers
Liu Penzi (Jianshi Emperor, Red Eyebrows) | 0025-07 (c.) | 0027-03 (surrendered to Guangwu) | after gengshi, contestedWith guangwu | text only (gengshi) | CARD (claimant; held Chang'an from autumn 25 into 26)
Sima Lun, Prince of Zhao | 0301-02 | 0301-05 | inside hui-jin (Hui deposed and restored) | text only (hui-jin) | CARD (usurped the throne in Luoyang)
Huan Xuan (Chu) | 0403-12 | 0404-03 (driven from Jiankang; killed 404-06) | inside an-jin | text only (an-jin, gong-jin) | CARD (usurped in Jiankang, An deposed)
Emperor Mingyuan of Northern Wei | 0409 (0420 when the deck's line switches north) | 0423-12 (c.) | after gong-jin, before taiwu-nwei | gap (4.0-year gap before taiwu-nwei); named only as Taiwu's father | CARD (or bridge the seam with Liu Yu / Emperor Wu of Liu Song 420–422 and Liu Yifu 422–424; see Doubts)
Daughter of Emperor Xiaoming ("Yuan girl") | 0528-03 | 0528-03 (1 day) | before yuan-zhao | missing | MEMBER (of yuan-zhao; enthroned as a "son" by Empress Dowager Hu and replaced the next day)
Yuan Lang (Emperor of Northern Wei set up by Gao Huan) | 0531-11 | 0532-05 | contestedWith jiemin-nwei | text only (jiemin-nwei) | MEMBER (of jiemin-nwei); a CARD only if claimants who briefly reached Luoyang get cards
An Lushan (Yan) | 0756-02 | 0757-01 (killed) | contestedWith xuanzong, suzong | text only (xuanzong) | CARD (claimant; held Luoyang and Chang'an)
An Qingxu, Shi Siming, Shi Chaoyi (later Yan emperors) | 0757 | 0763 | — | text only (suzong, daizong) | MEMBER (of an-lushan's claimant card)
Zhu Ci (Qin/Han) | 0783-11 | 0784-07 | contestedWith dezong | text only (dezong) | CARD (claimant; held Chang'an)
Huang Chao (Qi) | 0881-01 | 0883-05 (left Chang'an; died 884) | contestedWith xizong | text only (xizong) | CARD (claimant; held Chang'an)
Li Yun, Prince of Xiang | 0886-11 | 0887-01 | contestedWith xizong | missing (the muzong card's "Li Yun" is a different prince) | CARD (claimant; enthroned in Chang'an by Zhu Mei)
Li Yu, Prince of De (Zhaozong's son) | 0900-12 | 0901-01 | inside zhaozong | text only (zhaozong: "crowned his son") | CARD (enthroned for about a month while Zhaozong was locked up)
Yelü Deguang (Emperor Taizong of Liao) | 0947-01 | 0947-05 | after shi-chonggui, before liu-zhiyuan | gap (Jan–Mar 947 has no card); text only (shi-chonggui, liu-zhiyuan) | CARD (took Kaifeng and held court there as emperor of China)
Li Congyi (left in Kaifeng by the Liao) | 0947-05 | 0947-06 | — | missing | MEMBER (of liu-zhiyuan)
Zhang Bangchang (Da Chu) | 1127-04 | 1127-05 (abdicated after about 32 days) | after huizong, before gaozong-song | gap; missing | CARD (Jin puppet emperor in Kaifeng)
Zhao Fu (infant set up in the Miao–Liu mutiny) | 1129-04 | 1129-05 | inside gaozong-song | missing | MEMBER (of gaozong-song)
Li Zicheng (Shun) | 1644-04-25 | 1644-06-04 | after chongzhen, before shunzhi | gap (no card between the fall of Beijing and the Qing entry); text only (chongzhen) | CARD
Dorgon (regent) | 1643-09 | 1650-12-31 | inside shunzhi | text only | MEMBER (of shunzhi). The deck treats Empress Lü, Cao Cao and Cixi as leaders, so he is the same kind of ruler.
Li Zongren (acting president) | 1949-01-21 | 1949-11-20 (left for the US; formally to 1950-03) | inside chiang | text only (chiang) | MEMBER (of chiang)

#### Parallel dynasties omitted (scope choice)
These are left out deliberately, because the deck tracks one line, not because of a data gap:
- Three Kingdoms: Shu Han (Liu Bei, Liu Shan) and Eastern Wu (Sun Quan, Sun Liang, Sun Xiu, Sun Hao). The line runs through Cao Wei.
- Sixteen Kingdoms (304–439): Han-Zhao, Later Zhao, Former Qin (Fu Jian) and the rest.
- Southern Dynasties (420–589): Liu Song, Southern Qi, Liang and Chen, about 24 emperors. Also the Western Liang rump.
- Northern Wei before Taiwu (Daowu 386–409, Mingyuan 409–423), Eastern Wei (Xiaojing) and Northern Qi (Gao Yang … Gao Heng).
- Rivals of the Sui–Tang transition: Yuwen Huaji and his puppet Yang Hao, Wang Shichong, Dou Jiande, Li Mi, Xue Ju.
- The Ten Kingdoms (Wu, Southern Tang, Wuyue, Former and Later Shu, Min, Southern Han, Chu, Jingnan, Northern Han).
- Liao (9 emperors), Western Xia, Jin/Jurchen (10 emperors), Western Liao, and Liu Yu's Qi (1130–1137, a Jin puppet holding Kaifeng).
- Northern Yuan after 1368; Southern Ming (Hongguang, Longwu, Shaowu, Yongli).
- Taiping Heavenly Kingdom; Manchukuo (Puyi 1932–45); Wang Jingwei's Nanjing regime; the ROC on Taiwan after 1949 (Chiang 1950–75 and his successors).

#### Doubts
- The 420–424 seam is the real inconsistency. Traditional orthodoxy (Zizhi Tongjian) follows the Southern Dynasties after Jin. The deck jumps from Eastern Jin straight to Northern Wei's Taiwu in 424, leaving 420–423 empty. Either add Mingyuan (to stay northern) or add Liu Yu and Liu Yifu of Liu Song as a bridge. Either way, it should say in its scope note that the 420–589 line is northern.
- Under the user's rule ("every person who ruled"), de facto rulers who already appear in card text could also be counted, because the deck gives cards to Cao Cao and Cixi: Huo Guang (87–68 BC), Dong Zhuo (189–192), Sima Yi, Sima Shi and Sima Zhao (249–265), Liu Yu (404–420), Erzhu Rong, Gao Huan, Yuwen Tai and Yuwen Hu. They are not listed above because they were regents or ministers of reigning emperors, and the deck has no consistent rule for them. Decide this deck-wide.
- 0316-12 → 0318-04 (the validator flags the 1.3-year gap before yuan-jin): Sima Rui ruled as King of Jin from 317. This is not a missing person. yuan-jin could simply start at 0317-04.
- Yang You, Yang Tong and Yang Hao (618): Yang Hao, Yuwen Huaji's puppet at Jiangdu, never held a capital, so he is left out.
- Lin Sen (ROC chairman 1931–43) was a figurehead under Chiang and is skipped. Liu Shaoqi (PRC head of state 1959–68) is skipped because the deck counts paramount leaders.

### denmark

Validator gap: 1533–1534 (before christian-iii), the Count's Feud interregnum.

Valdemar the Young | 1218 (crowned co-king; elected 1215) | 1231-11-28 (killed in a hunting accident) | valdemar-ii | missing; crowned junior king beside his father for 13 years | MEMBER (of valdemar-ii)
Count Christopher of Oldenburg | 1534-06 | 1536-07-29 (surrender of Copenhagen) | christian-iii (or a new Count's Feud interregnum card) | text only, in christian-iii; held Copenhagen, Zealand and Scania in the name of the jailed Christian II | MEMBER (of christian-iii)

No missing crowned kings: every king on the standard list from Gorm to Frederik X has a card.

#### Doubts
- Magnus the Strong (son of King Niels) is sometimes called co-king; he was actually elected king of Västergötland in Sweden. Not counted.
- Co-kings who later ruled alone (Cnut VI from 1170, Valdemar I from 1154/1157, Eric IV from 1232) already have their own cards.
- Struensee (1770–1772) and Crown Prince Frederick (regent 1784–1808) ruled for the mad Christian VII; treated as regents.
- 1439–1440 and 1448 are vacancies (council rule); no ruler.

### egypt

Source: Shaw (ed.), Oxford History of Ancient Egypt, dynastic list; Ryholt (1997) for Dyns 13 to 17. Taken from memory (no web lookups), so check any date before using it.
Format: name | start | end | where it goes | why missing | recommendation

#### Missing rulers: CARD (reign can be dated)
Nebka (Sanakht) | -2686~ | -2667~ | after khasekhemwy | 19-yr gap; text only in djoser | CARD
Sekhemkhet | -2648~ | -2640~ | after djoser | 35-yr gap | CARD
Khaba | -2640~ | -2637~ | after Sekhemkhet | 35-yr gap | CARD
Huni | -2637~ | -2613~ | after Khaba | 35-yr gap; text only in sneferu | CARD
Djedefre | -2566~ | -2558~ | after khufu | 8-yr gap; text only in khafre and userkaf | CARD
Shepseskaf | -2503~ | -2498~ | after menkaure | 9-yr gap; text only in menkaure and userkaf | CARD
Mentuhotep III | -2004~ | -1992~ | after mentuhotep-ii | 19-yr gap; text only in mentuhotep-ii | CARD
Mentuhotep IV | -1992~ | -1985~ | after Mentuhotep III | 19-yr gap; text only in mentuhotep-ii and amenemhat-i | CARD
Amenemhat II | -1911~ | -1877~ | after senusret-i | 41-yr gap; text only | CARD
Senusret II | -1877~ | -1870~ | after Amenemhat II | 41-yr gap; text only in senusret-iii | CARD
Amenemhat IV | -1786~ | -1777~ | after amenemhat-iii | 9-yr gap; text only | CARD
Djehuti (Sekhemre-Sementawy) | -1650~ | -1647~ | after hyksos (Ryholt 16th Dyn, Thebes) | hidden in hyksos as "Theban kings of the 16th Dynasty" | CARD (Turin: 3 yrs)
Sobekhotep VIII | -1647~ | -1631~ | after Djehuti | hidden in hyksos | CARD (Turin: 16 yrs)
Neferhotep III | -1631~ | -1630~ | after Sobekhotep VIII | hidden in hyksos | CARD (Turin: 1 yr)
Mentuhotep VI | -1630~ | -1629~ | after Neferhotep III | hidden in hyksos | CARD (Turin: 1 yr)
Nebiriau I | -1628~ | -1602~ | after Mentuhotep VI | text only in hyksos | CARD (Turin: 26 yrs)
Bebiankh | -1600~ | -1588~ | after Nebiriau I | text only in hyksos | CARD (Turin: 12 yrs)
Thutmose II | -1492~ | -1479~ | after thutmose-i | 13-yr gap; text only | CARD
Smenkhkare | -1338~ | -1336~ | overlapping the end of akhenaten | absent (Neferneferuaten is only mentioned in akhenaten) | CARD
Ay | -1327~ | -1323~ | after tutankhamun | 4-yr gap; text only in tutankhamun and horemheb | CARD
Ramesses I | -1295~ | -1294~ | after horemheb (shorten horemheb to -1295) | text only in horemheb and seti-i | CARD
Sethnakht | -1186~ | -1184~ | after tausret | 2-yr gap; text only in tausret and ramesses-iii | CARD
Herihor | -1080~ | -1074~ | parallel to ramesses-xi (Theban high priest who took a king's titles) | text only in ramesses-xi | CARD (claimant)
Pinedjem I | -1054~ | -1032~ | parallel to psusennes-i (king's titles at Thebes) | text only in amenemnisu and psusennes-i | CARD (claimant)
Shoshenq II (Heqakheperre) | -0890~ | -0890~ (widen to -0891 to -0889) | after osorkon-i | text only in osorkon-i | CARD
Harsiese A | -0870~ | -0860~ | parallel to osorkon-ii (Theban king) | text only in osorkon-ii and pedubast-i | CARD (claimant)
Iuput I | -0804~ | -0803~ | parallel to pedubast-i (co-regent) | text only in pedubast-i | CARD (claimant)
Shoshenq IV | -0793~ | -0787~ | after pedubast-i (Shaw's 23rd Dyn) | text only in shoshenq-iii | CARD (claimant)
Takelot III | -0764~ | -0757~ | after osorkon-iii | text only in osorkon-iii | CARD (claimant)
Rudamun | -0757~ | -0754~ | after Takelot III | absent | CARD (claimant)
Kashta | -0760~ | -0747~ | before piye | text only in piye | CARD (controlled Upper Egypt; see Doubts)
Iuput II | -0754~ | -0715~ | parallel to shoshenq-v and piye (Leontopolis; named on Piye's stela) | text only in pedubast-i or shoshenq-i | CARD (claimant)
Peftjauawybast | -0740~ | -0725~ | parallel to piye (Herakleopolis; named on Piye's stela) | absent | CARD (claimant)
Nimlot (Hermopolis) | -0740~ | -0725~ | parallel to piye (named on Piye's stela) | text only in piye | CARD (claimant)
Necho I | -0672 | -0664 | parallel to taharqa (Saite king under the Assyrians) | text only in psamtik-i and necho-ii | CARD
Tanutamani | -0664 | -0656 | after taharqa, overlapping psamtik-i | text only in taharqa and psamtik-i | CARD
Psamtik III | -0526 | -0525 | after ahmose-ii | text only in ahmose-ii and cambyses-ii | CARD
Bardiya | -0522 | -0522 (Mar to Sep) | between cambyses-ii and darius-i | absent | CARD
Artaxerxes II | -0405 | -0401~ | parallel to amyrtaeus (Elephantine documents still date by him until c.401) | text only in artaxerxes-iii | CARD (claimant; see Doubts)
Khababash | -0338~ | -0336~ | parallel to arses | text only in nectanebo-ii and arses | CARD (claimant)

#### Missing rulers: MEMBER (no datable reign)
first-intermediate (Abydos list, 7th to 8th Dyns; "and others" in the card hides these): Neferkare Neby; Djedkare Shemai; Neferkare Khendu; Merenhor; Neferkamin (Sneferka); Nikare; Neferkare Tereru; Neferkahor; Neferkare Pepiseneb; Neferkamin Anu | MEMBER
herakleopolis-kings (Turin list): Neferkare (VIII); Setut; Meryhathor | MEMBER
thirteenth-dynasty (Ryholt, late 13th): Sewadjare Mentuhotep V; Ibi (…maatre); Hor (…webenre); Sewahenre Senebmiu; Mershepsesre Ini II | MEMBER
hyksos (15th Dyn): Yanassi (text only in khyan) | MEMBER
hyksos (Ryholt 16th Dyn, Thebes, no reign length survives): Nebiriau II; Semenre; Sekhemre-Shedwaset; Montuemsaf; Mentuhotep VII | MEMBER (Ryholt also puts Dedumose I/II and Senusret IV, currently in thirteenth-dynasty, in this group)
hyksos (Abydos Dynasty, Ryholt): Wepwawetemsaf; Pantjeny; Snaaib | MEMBER
hyksos (Ryholt 14th Dyn, eastern Delta; earlier than the card's start but the only fitting group): Yakbim; Ya'ammu; Qareh; 'Ammu; Sheshi; Nehesy (text only in ini); Merdjefare; Sewadjkare III; Nebdjefare; Webenre | MEMBER

#### Zero-length cards (start = end), to widen
nerikare (-1767), amenemhat-v (-1767; Ryholt gives about 3 to 4 yrs), sehetepibre (-1759), sewadjkare (-1759), nedjemibre (-1759; 7 months), renseneb (-1757; 4 months), khabaw (-1755; Ryholt about 3 yrs), djedkheperew (-1755; about 2 yrs), intef-iv (-1744), seth-meribre (-1744), sihathor (-1729; a few months), sobekhotep-v (-1719), nepherites-ii (-0380; 4 months).
The 13th-Dyn cards form a chain, so widening one means shifting the cards next to it. Give each at least a 1-year span, or use month dates where the deck allows them (other decks use "YYYY-MM"). For nepherites-ii, use month dates within -0380.

#### Doubts
- These names, dates and Ryholt reign lengths were not checked against a live source. Sequences in the 13th to 16th Dyns are disputed (Ryholt's order differs from von Beckerath's), and the deck's numbering of Intef V to VII follows the older system.
- Kashta, Herihor, Pinedjem I, Harsiese A, Iuput I/II, Peftjauawybast, Nimlot and Artaxerxes II are local or rival kings. Include them only if the deck's claimant standard (pedubast-i, osorkon-iii, inaros) applies.
- Possible further names left out: Thamphthis/Baka (end of the 4th Dyn), Qahedjet (3rd Dyn), Petubastis III and Psammetichus IV (rebels under Persia), Xerxes II and Sogdianus (424/423 BC, only weeks).
- The thirteenth-dynasty member "Sebkay" may be Senebkay of the Abydos Dynasty. Check which king is meant.
- The 14th-Dyn kings predate the hyksos card's start (-1650). An earlier group card might fit them better.

### england

Compared against the standard list of English / British monarchs (Wikipedia "List of English monarchs", "List of British monarchs") plus heads of state of the 1649-1660 interregnum. Validator reports no gap over a year in this deck.

#### Missing rulers

Louis (later Louis VIII of France) | 1216-06-02 | 1217-09-22 | after reign john (overlaps john / henry-iii, kind claimant, contestedWith john, henry-iii) | text only (john, henry-iii) | recommendation: CARD (proclaimed king at St Paul's, held London and about half the kingdom; widely recognised by the barons and Alexander II of Scotland; renounced at Treaty of Lambeth/Kingston, Sept 1217)
Philip (II of Spain), King of England jure uxoris | 1554-07-25 | 1558-11-17 | co-ruler on mary-i (split mary-i into "Mary I" 1553-07-19 to 1554-07-25 and "Philip & Mary" 1554-07-25 to 1558-11-17, as the deck does for William & Mary) | text only (mary-i) | recommendation: CARD (styled king by the 1554 marriage Act, regnal years and documents ran in "Philip and Mary")
Richard Cromwell, Lord Protector | 1658-09-03 | 1659-05-25 | after commonwealth's Oliver period (split commonwealth, or new card between commonwealth phases) | text only (commonwealth) | recommendation: CARD (attested head of state for about eight months)
Henry the Young King | 1170-06-14 | 1183-06-11 | member of henry-ii | absent entirely | recommendation: MEMBER (of henry-ii; crowned co-king but never held power; see Doubts)
Council of State (president John Bradshaw) | 1649-02-14 | 1653-04-20 | member of commonwealth | hidden in commonwealth (card names only Oliver Cromwell, who was not head of state until Dec 1653) | recommendation: MEMBER (of commonwealth)
Committee of Safety (Charles Fleetwood, John Lambert) | 1659-10-26 | 1659-12-26 | member of commonwealth | absent | recommendation: MEMBER (of commonwealth)
Restored Rump Parliament / Council of State | 1659-05-07 | 1660-03-16 | member of commonwealth | absent | recommendation: MEMBER (of commonwealth)
George Monck | 1660-02-03 | 1660-05-29 | member of commonwealth | text only (commonwealth) | recommendation: MEMBER (of commonwealth; controlled London and the army, brought about the Restoration)
William of Orange (provisional administration) | 1688-12-28 | 1689-02-13 | interregnum gap between james-ii (ends 1688-12-11) and william-and-mary | gap (2 months, no card) | recommendation: MEMBER (of william-and-mary, or of a short "Glorious Revolution" interregnum card; William already has cards, so not a new ruler)

Totals: CARD 3, MEMBER 6.

#### Doubts
- Commonwealth card uses Oliver Cromwell as its ruler for 1649-1660, but he was head of state only 1653-12-16 to 1658-09-03 (Lord Protector). Consider splitting into Commonwealth (1649-1653), Protectorate of Oliver (1653-1658), Richard (1658-1659), and the 1659-1660 restored Commonwealth.
- Young King Henry: Wikipedia lists him only in a note; if the deck counts crowned junior kings (France deck has the same issue with Hugh Magnus and Philip, son of Louis VI), he becomes a CARD 1170-06-14 to 1183-06-11.
- Louis's end date: 1217-09-12 (Treaty of Lambeth agreed) vs 1217-09-20/22 (left England / formal renunciation). Wikipedia infobox gives 22 Sept 1217.
- Edgar Ætheling (elected Oct 1066, never crowned) and Harold II fall just before the deck's first card (1066-12-25); outside scope.
- Gap 1688-12-11 to 1689-02-13 is a real interregnum (Convention Parliament); short, below the validator threshold.
- Wikipedia returned HTTP 429 on every retry (60 s waits), so this deck was checked against the standard list from my own knowledge.

### france

Compared against the standard list of French monarchs (Wikipedia "List of French monarchs", Capetian to Second Empire), including its disputed entries. Validator reports no gap over a year. Small uncovered stretches: 1316-06-05 to 1316-11-15 (regency of Philip, later Philip V), 1328-02-01 to 1328-04-01 (regency of Philip of Valois, later Philip VI), 1815-06-22 to 1815-07-08 (Napoleon II / Commission of Government), 1830-08-02 to 1830-08-09 (Louis XIX, Henri V, Lieutenant-General Louis-Philippe). The two regency gaps are filled by men who already have cards.

#### Missing rulers

Napoleon II | 1815-06-22 | 1815-07-07 | after napoleon-i-restored, before louis-xviii-restored (fills the gap) | gap / text only (napoleon-i-restored claim, napoleon-iii) | recommendation: CARD (proclaimed by the Chambers, listed (disputed) on the Wikipedia list; an interregnum-style card "Napoleon II and the Commission" with members is the honest form, since the four-year-old was in Vienna)
Commission of Government (Joseph Fouché, president) | 1815-06-22 | 1815-07-07 | member of the Napoleon II card above | gap / text only (louis-xviii-restored claim mentions Fouché) | recommendation: MEMBER (of the new Napoleon II card; this body actually governed Paris in the gap)
Louis XIX (Louis-Antoine, Duke of Angoulême) | 1830-08-02 | 1830-08-02 | member of charles-x (or of a short 1830 gap card) | text only (charles-x claim) | recommendation: MEMBER (of charles-x; "reigned" about 20 minutes between Charles X's and his own abdication papers; listed as disputed by Wikipedia; no datable reign in practice)
Henri V (Henri, Count of Chambord) | 1830-08-02 | 1830-08-09 | member of charles-x or louis-philippe (fills the 1830-08-02 to 08-09 gap) | absent (gap) | recommendation: MEMBER (of louis-philippe; Charles X's abdication named him, but Paris was held by the revolution and Louis-Philippe as Lieutenant-General; never controlled anything; disputed entry on Wikipedia)
Hugh Magnus (junior king) | 1017-06-09 | 1025-09-17 | member of robert-ii | text only (robert-ii) | recommendation: MEMBER (of robert-ii; crowned co-king, died before his father, never ruled alone)
Philip (junior king, son of Louis VI) | 1129-04-14 | 1131-10-13 | member of louis-vi | text only (louis-vi) | recommendation: MEMBER (of louis-vi; crowned co-king, killed by the pig, never ruled alone)

Totals: CARD 1, MEMBER 5.

#### Doubts
- Wikipedia returned HTTP 429 on every retry (60 s waits), so this deck was checked against the standard list from my own knowledge.
- Napoleon II: the deck's own claim marks his reign "disputed" and says he never ruled. If the deck prefers not to give him a card, the minimum is an interregnum card for 1815-06-22 to 1815-07-08 with Napoleon II and Fouché's Commission as members; as it stands the gap has no card at all.
- 1830 gap: Louis-Philippe was Lieutenant-General of the Realm from 1830-07-31 and became king on 08-09; his card could start earlier, or a tiny interregnum card could hold Louis XIX and Henri V as members.
- 1848-02-24: Louis-Philippe abdicated in favour of his grandson Philippe, Count of Paris ("Philippe VII" to Orleanists). Never recognised; the Second Republic card starts the same day. Skipped as a pure claimant.
- Junior kings (Hugh Magnus, Philip) are crowned co-kings who never ruled alone; the England audit treats Henry the Young King the same way. If the deck decides crowned junior kings get cards, these become CARDs.
- Henry V of England was Regent and Heir of France under the Treaty of Troyes (1420-1422) but never king; the Henry VI claimant card covers the English claim. Skipped.
- Louis XVII is already a member of first-republic; Louis XVIII's de jure reign from 1795 is not counted (he controlled nothing until 1814).

### hawaii

Checked against the standard list of monarchs of the Kingdom of Hawaii from my own knowledge (not fetched): Kamehameha I, II, III, IV, V, Lunalilo, Kalākaua, Liliʻuokalani. All eight have cards. The validator reports no date gaps.

None missing.

#### Doubts

- 1824-07-14 to 1825-06-06: Kamehameha III succeeded on his brother's death but was proclaimed only in June 1825. Kaʻahumanu governed as kuhina nui (regent) with Kalanimoku. She is a regent of a reigning king, so she's skipped (the deck names her in text). The deck could start `kamehameha-iii` at 1824-07-14 instead.
- Kaʻahumanu (1819-1832) and later kuhina nui shared power by law. They're skipped as regents/co-executives, not monarchs.
- Paulet Affair (1843-02-25 to 1843-07-31): Lord George Paulet occupied the islands for Britain while Kamehameha III stayed king. This is a foreign occupation, not a reign, and it's already mentioned in text.
- Kaumualiʻi, King of Kauaʻi, stayed independent until 1810. He ruled a separate kingdom, not the Hawaiian Kingdom, so he's out of scope.
- Liliʻuokalani acted as regent during Kalākaua's travels (1881, 1890-91). These were regencies, so they're skipped.
- The deck ends at the 1893 overthrow. Sanford Dole (Provisional Government 1893-94, Republic of Hawaii 1894-98) would only belong if the deck extended past the monarchy.

### hre

Scope used: the deck counts emperors and, from 911, the East Frankish/German kings (kings of the Romans), and it already gives cards to rival/anti-kings (Guy, Lambert, Louis the Blind, Berengar, Philip, Otto IV, William of Holland, Alfonso X as claimant, Frederick the Fair as claimant). Validator gaps: 877–881 (before charles-the-fat), 1313–1314 (before louis-iv), 1657–1658 (before leopold-i), 1740–1742 (before charles-vii). All four are real vacancies with no ruler in them.

Rudolf of Rheinfelden | 1077-03-15 | 1080-10-15 | after henry-iv (contestedWith henry-iv) | missing entirely; anti-king elected at Forchheim, crowned at Mainz, held Saxony and had the Gregorian party behind him | CARD (kind claimant, like frederick-the-fair)
Hermann of Salm | 1081-08-06 | 1088-09-28 (gave up 1088) | henry-iv | missing entirely; second Saxon anti-king, little support beyond Saxony | MEMBER (of henry-iv)
Conrad, son of Henry IV | 1087-05-30 | 1098-05 (deposed) | henry-iv | missing; crowned co-king of Germany 1087, rebelled 1093 and held Lombardy as king of Italy | MEMBER (of henry-iv)
Henry Berengar | 1147-03-30 | 1150 | conrad-iii | missing; child co-king elected while Conrad III went on crusade | MEMBER (of conrad-iii)
Henry (VII) | 1222-05-08 (elected 1220-04) | 1235-07 (deposed) | after frederick-ii (overlaps it) | missing entirely; crowned King of the Romans and actually governed Germany for 13 years while Frederick II was in Italy, then rebelled and was deposed | CARD
Henry Raspe | 1246-05-22 | 1247-02-16 | after frederick-ii / before william-of-holland (contestedWith frederick-ii, conrad-iv) | missing entirely; papal anti-king, beat Conrad IV at the Nidda in 1246 | CARD (kind claimant or monarch, to match william-of-holland)
Günther von Schwarzburg | 1349-01-30 | 1349-05-26 (renounced) | charles-iv | missing; Wittelsbach anti-king to Charles IV for four months | MEMBER (of charles-iv)
Jobst of Moravia | 1410-10-01 | 1411-01-18 | after rupert, beside sigismund (contestedWith sigismund) | text only, in sigismund card; elected by a majority of the electors and recognised by most of the Empire until he died | CARD
Ferdinand IV | 1653-05-31 | 1654-07-09 | ferdinand-iii | missing; elected and crowned King of the Romans in his father's lifetime, died before him (note: the bohemia deck gives him his own card) | MEMBER (of ferdinand-iii)

#### Doubts
- 877–881 gap: no emperor (Charles the Bald died 0877-10-06; Charles the Fat crowned 0881-02-12). But the deck switches from emperors to East Frankish kings at Louis the Child (900) and Conrad I (911), and Arnulf's card starts in 887 when he became king, not emperor in 896. If East Frankish kings count before 900, Louis the German (843–876), Louis the Younger (876–882) and Carloman of Bavaria (876–880) are missing. I did not list them because the pre-900 cards are clearly emperor-only.
- william-of-holland starts 1254-05-21, but he was anti-king from 1247-10-03 (crowned Aachen 1248-11-01). Date issue, not a missing ruler.
- wenceslaus ends 1400-08-20 (deposition); he kept claiming the title until 1411. Fine as is.
- Co-kings who later ruled alone (Otto II 961, Henry III 1028, Henry IV 1054, Henry V 1099, Henry VI 1169, Maximilian I 1486, Joseph I 1690, Joseph II 1764 etc.) already have their own cards; not listed.
- Source: Wikipedia list pages (Bohemia/Norway checked live); HRE list from own knowledge, dates standard.

### hungary

Scope used: kings and recognised rival kings; leaders in revolutions (the deck gives kossuth and hunyadi cards); from 1918 the person who actually led (head of state or government, party first secretary 1948–1988, prime ministers from 1988). Validator gap: 1444–1446 (before hunyadi). Gaps under one year the validator does not flag: 1956-07-18 to 1956-10-24 and 1993-12-12 to 1994-07-15.

John II Sigismund Zápolya | 1540-09-13 (elected) | 1570-08-16 (gave up the royal title at Speyer; died 1571-03-14) | after john-zapolya, beside ferdinand-i (contestedWith ferdinand-i) | missing entirely; elected king as a baby, held Buda until 1541 and then ruled eastern Hungary/Transylvania for thirty years under his mother Isabella and then himself | CARD
Francis II Rákóczi | 1705-09-20 (ruling prince of the Confederated Estates; war from 1703) | 1711-04-30 (Peace of Szatmár) | beside leopold-i / joseph-i (contestedWith joseph-i) | missing entirely; his Diet dethroned the Habsburgs in 1707 and he ruled most of the kingdom; same kind of figure as kossuth, who has a card | CARD (kind leader)
Artúr Görgei | 1849-08-11 | 1849-08-13 | kossuth | missing; Kossuth handed him full dictatorial power, he surrendered at Világos two days later | MEMBER (of kossuth)
Sándor Garbai | 1919-03-21 | 1919-08-01 | kun | missing; formal head of the Revolutionary Governing Council (head of state) of the Soviet Republic while Kun held the real power | MEMBER (of kun)
Archduke Joseph August | 1919-08-07 | 1919-08-23 | friedrich | missing; took power as regent (homo regius) after the Peidl government fell and appointed Friedrich, forced out by the Entente | MEMBER (of friedrich)
Ernő Gerő | 1956-07-18 | 1956-10-25 | after rakosi, before nagy | gap; missing entirely; succeeded Rákosi as party first secretary and called in Soviet troops on 23 October | CARD
Péter Boross | 1993-12-12 | 1994-07-15 | after antall, before horn | gap; missing entirely; prime minister after Antall's death | CARD

#### Doubts
- 1444–1446 gap (after the death of Vladislaus I at Varna): the kingdom was run by seven captains-general until the Diet elected Hunyadi governor in June 1446; ladislaus-v covers these years. No single ruler, so not counted.
- Gabriel Bethlen (elected king 1620-08-25, never crowned, gave up the title in 1621) and Imre Thököly (Ottoman-backed "King of Upper Hungary" 1682–1685) could be cards if the deck wants anti-kings beyond those already there; not counted.
- Elizabeth of Luxembourg (Albert's widow, 1439–1440) ruled for her son Ladislaus V; treated as regent.
- Imre Nagy was prime minister 1953–1955 under Rákosi; in this deck's logic Rákosi stayed the leader. Not counted.
- The 1918–1919 hand-over: Károlyi was prime minister and then president; Dénes Berinkey (PM Jan–Mar 1919) served under him. Not counted.
- The deck has Viktor Orbán to 2026-05-09 and Péter Magyar after; this is beyond my knowledge to verify and was left as is.

### italy

Compared against the standard list of Kings of Italy (Wikipedia "King of Italy" / "List of monarchs of Italy", House of Savoy section), from my own knowledge (Wikipedia was rate-limiting during this audit). All four Savoy kings have cards (Victor Emmanuel II, Umberto I, Victor Emmanuel III, Umberto II), and the deck adds a leader card for Mussolini (1922-1943). No date gaps.

#### Missing rulers

None missing.

#### Doubts
- Mussolini's card ends 1943-07-25, but he headed the Italian Social Republic (Salò) from 1943-09-23 to 1945-04-25, a German-backed rival government that held northern Italy (and Rome until June 1944). He already has a card; consider extending it or adding "Mussolini, again" (kind leader/claimant, 1943-09-23 to 1945-04-25) if the deck wants that span covered.
- Pietro Badoglio, Prime Minister 1943-07-25 to 1944-06-09, ran the king's government at Brindisi/Salerno after the armistice. If the Mussolini card is the precedent for "who held real power", Badoglio could be a MEMBER of victor-emmanuel-iii (1943-07-25 to 1944-06-09). Not a ruler in the deck's monarch scope, so not counted.
- Umberto II was Lieutenant General of the Realm from 1944-06-05, holding his father's powers; his card starts only at 1946-05-09. Same person, so not missing; the card text already says so.
- After 1946-06-12 Alcide De Gasperi was provisional head of state until Enrico De Nicola took office on 1946-07-01; outside the deck's span (epilogue).

### japan

Wikipedia was rate-limited; checked against the lists of Tokugawa shoguns and Azuchi–Momoyama leaders from own knowledge.

Ashikaga Yoshiaki | 1568-10-18 | 1573-08 (formally resigned 1588) | inside oda-nobunaga | text only (oda-nobunaga) | MEMBER (of oda-nobunaga; the last Ashikaga shogun was Nobunaga's puppet)
Toyotomi Hidetsugu | 1591-12 | 1595-07-15 | inside toyotomi-hideyoshi | text only (toyotomi-hideyoshi) | MEMBER (of toyotomi-hideyoshi; held the office of kampaku while Hideyoshi ruled as taikō)
Council of Five Elders (Tokugawa Ieyasu, Maeda Toshiie (d. 1599), Mōri Terumoto, Ukita Hideie, Uesugi Kagekatsu) for Toyotomi Hideyori | 1598-09-18 | 1600-10-21 | gap before tokugawa-ieyasu | gap (2.1 years) | MEMBER (of a new interregnum card for 1598–1600 covering the gap. The other option is to start tokugawa-ieyasu at 1598-09-18 and name the elders and Hideyori as members.)

All 15 Tokugawa shoguns have cards. The 1712–1713 gap before Ietsugu is the normal wait between Ienobu's death (1712-11) and Ietsugu's appointment (1713). There is no missing ruler there.

#### Doubts
- Scope: the emperors reigning from 1568 to 1868 (Ōgimachi … Kōmei) are excluded, and so are the prime ministers after 1868 (e.g. Itō, Tōjō, Yoshida). The deck's blurb makes this an explicit scope choice. It does mean the de facto power-holders after 1868 are not counted.
- Toyotomi Hideyori (1598–1615) was Hideyoshi's recognised heir but never ruled. Name him as a member only.
- Yoshinobu's start is given as "1867". He was appointed 1867-01-10 (Gregorian), so it is fine as given.

### jordan

Source: Wikipedia was rate-limited (HTTP 429), so this check uses my own knowledge.

None missing. Abdullah I, Talal, Hussein and Abdullah II have cards, and the validator reports no gaps for this deck.

#### Doubts
- Prince Naif bin Abdullah was regent from 1951-07-20 to about 1951-09-05, while Talal was abroad for treatment. He was a regent, not a monarch, so he is skipped. He is already discussed in the talal card text. If the deck wants the interval shown, he could be a MEMBER of talal.
- The 1952–1953 Regency Council for the underage Hussein is skipped (regents of a reigning monarch).

### korea

Wikipedia was rate-limited; checked against the standard list of 27 Joseon monarchs from own knowledge.

None missing.

All 27 kings have a card, and Gojong has two (king and emperor). There are no date gaps.

#### Doubts
- The Heungseon Daewongun ran the government for Gojong from 1864 to 1873. He was the regent of a reigning monarch and the deck does not treat regents as leaders, so he is skipped. He is mentioned in the text.
- Queen-dowager regencies (e.g. Queen Jeonghui for Seongjong, Queen Munjeong for Myeongjong, Queen Jeongsun for Sunjo) are skipped for the same reason.

### liechtenstein

Source: Wikipedia "List of monarchs of Liechtenstein" (raw wikitext fetched).

None missing. (Deck starts 1718-03-12 with Anton Florian, matching WP; Joseph Wenzel I's first reign 1712–1718 lies before the span and his 1748–1772 reign has a card.)

#### Doubts
- Prince Karl (born 1803): Johann I is said to have passed the principality nominally to him c. 1806–1813/14 (already noted in johann-i-joseph). WP does not list him; skip unless the deck wants nominal holders.
- Regents (Joseph Wenzel for Johann Nepomuk Karl; Franz Joseph II for Franz I in 1938; Alois as regent since 2004) skipped as regents of reigning princes.

### luxembourg

Source: own knowledge; not fetched.

None missing.

#### Doubts
- Regencies of Grand Duchess Marie-Anne (1908–1912 for Guillaume IV; Feb–Jun 1912 for Marie-Adélaïde) and lieutenancies of Jean (1961–64) and Guillaume (2024–25) skipped as regents.
- German occupation 1940–1944 (Gauleiter Gustav Simon) while Charlotte was in exile is not named; possible member of charlotte.
- Adolphe was regent from April 1889 before succeeding; deck starts at his accession, fine.

### monaco

Source: Wikipedia "List of rulers of Monaco" (raw wikitext fetched) + own knowledge.

Rainier I, Lord of Cagnes | 1297-01-08 | 1301-04-10 | with francois-grimaldi | text only in francois-grimaldi ("cousin Rainier was in on the plot"); Wikipedia lists him as co-ruler of the same span | MEMBER (of francois-grimaldi)
Genoese control I (interregnum) | 1301-04-10 | 1331-09-12 | after francois-grimaldi, before charles-i | 30.4-year gap | CARD (interregnum "Genoa holds the Rock") with members: Republic of Genoa (Ghibelline regime of the Spinola and Doria, c. 1301–1317); Robert of Anjou, King of Naples (signore of Genoa 1318–1335); Rainier I (Grimaldi claimant, fighting for Naples/France)
Anthony I, Lord of Monaco | 1352-06-29 | 1357-08-15 | in charles-i | text only in charles-i ("shared the lordship with his uncle Antoine and his sons Rainier and Gabriel") | MEMBER (of charles-i)
Gabriel, Lord of Monaco | 1352-06-29 | 1357-08-15 | in charles-i | text only in charles-i | MEMBER (of charles-i)
Genoese control II (interregnum) | 1402-11-05 | 1419-06-05 | after louis-grimaldi, before jean-i | 16.6-year gap | CARD (interregnum) with members: Republic of Genoa; Jean II Le Maingre "Boucicault" (French governor of Genoa 1401–1409); Theodore II, Marquess of Montferrat (captain of Genoa 1409–1413); Giorgio Adorno (Doge 1413–1415); Tommaso di Campofregoso (Doge 1415–1421)
Ambroise, Lord of Monaco | 1419-06-05 | 1427 | in jean-i | text only in jean-i ("he and his brothers Ambroise and Antoine got the Rock back"); WP: joint rule until 1427 | MEMBER (of jean-i)
Anthony II (Antoine), Lord of Monaco | 1419-06-05 | 1427 | in jean-i | text only in jean-i | MEMBER (of jean-i)

Totals: 2 CARD (interregnum cards for the two Genoese gaps), 5 MEMBER.

#### Doubts
- Rainier II was also co-lord 1352–1357 (WP) but is already a member of lords-of-the-rock; fine to leave, though he arguably belongs in charles-i's members too.
- louis-grimaldi (1395-01 → 1402-11-05) silently spans a Genoese reoccupation 1395-12-19 → 1397-05-11 (WP); Jean I co-ruled Jan–Dec 1395 (he has his own later card). Consider noting it in the card or splitting.
- Milanese occupation under the Genoese Biagio Assereto, 1436-10-03 → 1436-11 (inside jean-i); too short for a card, could be a member/note.
- Who exactly governed the Rock 1301–1331 is poorly documented; the members suggested name the powers over Genoa, not attested castellans. Some sources date Charles I's recapture to 1329/1331.
- 1814-05-17 → 1814-05-30 small gap: WP calls 17 May – 17 June 1814 an "Allied occupation"; Honoré IV card begins 30 May (Treaty of Paris). Minor.
- Regents (Pomellina Fregoso for Claudine; Augustin Grimaldi for Honoré I; Federico Landi for Honoré II; the Chevalier de Grimaldi for Jacques I/Honoré III; Albert for Rainier III in 2005) skipped as regents of reigning rulers.

### mongol

Wikipedia was rate-limited (HTTP 429 from the API); checked against own knowledge of the Great Khans / Yuan emperors list.

None missing.

Every Great Khan, regent-empress and Yuan emperor from Genghis to Toghon Temür has a card (Tolui, Töregene and Oghul Qaimish as regents; Ariq Böke and Ragibagh as claimants; both Tugh Temür reigns).

#### Doubts
- 1259-08-11 → 1260-05-05: no card. Ariq Böke held Karakorum as Möngke's caretaker. His own claimant card starts 1260-06. He could have it start at 1259-08 instead of adding a new person.
- 1332-12-14 → 1333-07-19: the interregnum after Rinchinbal (Empress Budashiri and El Temür held power). It is too short for the validator to flag. No enthroned ruler, so nothing is missing.
- The Northern Yuan khans after 1368 are out of the deck's stated scope.

### morocco

Source: Wikipedia was rate-limited (HTTP 429), so this check uses my own knowledge of the standard "List of sultans of Morocco" (Alaouite section).

The 1727–1757 sequence is complete: Ahmad adh-Dhahabi (twice), Abd al-Malik, Abdallah (six tenures), Ali, Mohammed II ibn Arbia, al-Mostadi (three tenures) and Zin al-Abidin. The validator reports no gaps.

Hisham ibn Mohammed | 1792-02 (circa) | 1797 (circa) | claimant card after reign id yazid (parallel to slimane) | text only (named in the yazid/slimane cards as holding Marrakesh) | recommendation: CARD (kind claimant; proclaimed sultan at Marrakesh and recognised in the south for several years)
Maslama ibn Mohammed | 1792 (circa) | 1792 (circa) | parallel to slimane | not mentioned | recommendation: MEMBER (of slimane; proclaimed in the north in 1792, with no clearly datable reign)
Ahmad ibn Muhriz | 1672-04 (circa) | 1686 (circa) | parallel to ismail | text only (mentioned in the ismail card) | recommendation: MEMBER (of ismail; nephew and rival who held Marrakesh at times, with fragmentary dates)

#### Doubts
- All three are rival claimants. Standard lists put Hisham (1792–1797) in the sultan list as a parallel sultan. Maslama and Ibn Muhriz are usually treated as pretenders, so they are optional.
- Abdelhafid was proclaimed in Marrakesh in Aug 1907, a year before his card starts on 1908-08-21. This is a dating choice, not a missing ruler.
- Mohammed ibn al-Sharif (1636–1664) and earlier Alaouite chiefs fall before the deck's first card (al-Rashid, 1666), so they are out of span. Some lists start al-Rashid in 1664.
- Ben Arafa (1953–1955) is already a claimant card.

### mughal

Source: Wikipedia was rate-limited (HTTP 429), so this check uses my own knowledge of "List of emperors of the Mughal Empire" and the Sur dynasty list. The deck itself gives Sher Shah a card, so the Sur rulers inside the 1545–1555 gap are in scope.

Islam Shah Suri | 1545-05-26 | 1554-11-22 | after reign id sher-shah | gap (validator: 10.1 years before humayun-restored); text only in sher-shah/humayun-restored | recommendation: CARD
Firuz Shah Suri | 1554-11 | 1554-11 (circa; a few days) | after Islam Shah | gap | recommendation: CARD (murdered by his uncle within days). Fallback: MEMBER of Muhammad Adil Shah's card
Muhammad Adil Shah Suri | 1554-11 (circa) | 1555 (circa) | after Firuz Shah | gap; text only ("Sur cousins") | recommendation: CARD
Ibrahim Shah Suri | 1555 (circa) | 1555 (circa) | after Muhammad Adil Shah | gap | recommendation: CARD (held Delhi and Agra briefly)
Sikandar Shah Suri | 1555 (circa) | 1555-06-22 | after Ibrahim Shah, before humayun-restored | gap | recommendation: CARD (held Delhi until Sirhind, June 1555)
Hemu (Hem Chandra Vikramaditya) | 1556-10-07 | 1556-11-05 | after reign id akbar (overlaps it; claimant card) | text only (humayun-restored/akbar) | recommendation: CARD (kind claimant; took Delhi and was crowned there)
Dawar Bakhsh | 1627-10-29 (circa) | 1628-01-23 (circa) | after reign id jahangir | gap (1627-10-28 → 1628-01-19 not covered) | recommendation: CARD (proclaimed by Asaf Khan; the khutba was read in his name)
Shahryar Mirza | 1627-11 (circa) | 1628-01 (circa) | parallel to Dawar Bakhsh, at Lahore | text only (shah-jahan) | recommendation: CARD (kind claimant; proclaimed emperor at Lahore and held the treasury there). Fallback: MEMBER of Dawar Bakhsh card
Azam Shah | 1707-03-14 | 1707-06-20 | after reign id aurangzeb | gap (1707-03-03 → 1707-06-19); text only (bahadur-shah-i) | recommendation: CARD (crowned himself and held the imperial camp and army; often listed as emperor)
Kam Bakhsh | 1707-03 (circa) | 1709-01-14 | parallel to bahadur-shah-i | text only (bahadur-shah-i) | recommendation: CARD (kind claimant; ruled as padshah at Bijapur/Hyderabad and struck coins). Fallback: MEMBER of bahadur-shah-i
Azim-ush-Shan | 1712-02-27 (circa) | 1712-03-17 (circa) | after reign id bahadur-shah-i | gap (1712-02-27 → 03-29); text only (jahandar-shah) | recommendation: MEMBER (of jahandar-shah; claimed the throne in the war of succession, but no settled reign)
Nikusiyar | 1719-05-18 (circa) | 1719-08-13 (circa) | parallel to rafi-ud-darajat/shah-jahan-ii | not mentioned | recommendation: MEMBER (of shah-jahan-ii; proclaimed at Agra fort, a rival who never held Delhi)
Muhammad Ibrahim | 1720-10 (circa) | 1720-11-13 (circa) | claimant inside muhammad-shah | not mentioned | recommendation: CARD (kind claimant; enthroned in Delhi by Sayyid Abdullah Khan and beaten at Hasanpur)
Shah Jahan III | 1759-12-10 | 1760-10-10 | after reign id alamgir-ii | gap (1759-11-29 → 1760-10-10, about 10 months); text only (alamgir-ii) | recommendation: CARD
Bidar Bakht (Jahan Shah IV) | 1788-07-31 | 1788-10-11 (circa) | claimant inside shah-alam-ii | not mentioned | recommendation: CARD (enthroned in Delhi by Ghulam Qadir after Shah Alam II was deposed and blinded)

#### Doubts
- The Sur sequence of 1554–1555 is confused, with rival Surs ruling at the same time. Exact dates are uncertain, and Ibrahim and Sikandar overlapped with Adil Shah.
- Whether to show the Suris at all depends on scope. The deck already includes Sher Shah, so leaving out Islam Shah (9 years) is the clearest hole.
- Shah Alam II was proclaimed in exile on 1759-12-24, while Shah Jahan III sat in Delhi. The deck's 1760-10-10 start is Shah Alam's recognition in Delhi. Either way, Shah Jahan III fills the gap.
- Hemu, Shahryar, Kam Bakhsh, Muhammad Ibrahim and Nikusiyar are claimants. Their inclusion depends on the deck's claimant policy.
- Hemu held Delhi only, but he was crowned there.
- Dawar Bakhsh and Bidar Bakht were puppets, but they were formally enthroned.
- Azim-ush-Shan, Jahandar Shah's brothers Jahan Shah and Rafi-ush-Shan, and Bulaqi (Dawar Bakhsh's other name) were short war-of-succession figures.

### nepal

Wikipedia was rate-limited; checked against the list of Shah monarchs from own knowledge.

Gyanendra (first reign, aged 3) | 1950-11-07 | 1951-01-07 | inside tribhuvan (after Tribhuvan fled to the Indian embassy) | text only (tribhuvan); his card covers only 2001–2008 | CARD (attested reign: crowned by the Ranas and on coins; a separate "gyanendra-first" reign, like the other decks' "restored" cards)

#### Doubts
- The Rana hereditary prime ministers (Jung Bahadur 1846 – Mohan Shumsher 1951) were the real rulers. In a "Shah kings" deck they count as ministers or regents, so they are skipped. If the deck ever counts de facto rulers, they become MEMBERs of the surendra, prithvi and tribhuvan cards.
- Rana Bahadur Shah ran the state again as mukhtiyar from 1804 to 1806, after he abdicated. This is a regency of a reigning king, so it is skipped.

### norway

Checked against Wikipedia "List of monarchs of Norway" (fetched), which lists co-kings and the Danish/Lade de facto rulers. Validator gaps: 970–975 (before haakon-jarl), 1000–1015 (before olaf-ii), 1448–1449 (before charles-i), 1481–1483 (before john). Also a gap under one year that it does not flag: 1066-09-25 to 1067.

Harald Bluetooth | 0970c | 0986c (de jure) | haakon-jarl | gap 970–975; text only, in haakon-jarl and harald-greycloak; hailed king of Norway, Haakon Jarl ruled as his jarl (Wikipedia gives Haakon Jarl 965/70–995, so the haakon-jarl start could move to c.970) | MEMBER (of haakon-jarl)
Eric Haakonsson and Sweyn Haakonsson, Jarls of Lade | 1000-09-09 | 1015 (Eric left for England; Sweyn beaten at Nesjar 1016-03-25) | after olaf-tryggvason | gap 1000–1015; missing entirely; joint de facto rulers listed by Wikipedia, same role as Haakon Jarl who has a card | CARD (kind leader, joint card)
Sweyn Forkbeard (and Olof Skötkonung) | 1000-09-09 | 1014-02-03 | the Lade jarls card above | gap; overlord kings during the jarls' rule | MEMBER (of the new jarls card)
Haakon Ericsson | 1028 | 1029 | cnut | missing; Cnut's jarl in Norway, drowned 1029 | MEMBER (of cnut)
Sweyn Knutsson (with his mother Ælfgifu) | 1030 | 1035 | after cnut start, inside cnut span | missing entirely; ruled Norway with the title of king under Cnut until driven out | CARD
Magnus II Haraldsson | 1066-09-25 | 1069-04-28 | after harald-hardrada, beside olaf-kyrre | gap 1066–1067; text only, in olaf-kyrre; joint king with his brother | CARD
Haakon Toresfostre | 1093-09-22 | 1095-02 | beside magnus-barefoot | missing; joint king with his cousin Magnus Barefoot, held the Uplands and Trøndelag | CARD
Eystein I Magnusson | 1103-08-24 | 1123-08-29 | beside sigurd-the-crusader | missing entirely; joint king for 20 years, ruled Norway alone while Sigurd was on crusade | CARD
Olaf Magnusson | 1103-08-24 | 1115-12-22 | sigurd-the-crusader | missing; child co-king with his brothers | MEMBER (of sigurd-the-crusader, or of a joint Eystein-Sigurd-Olaf card)
Magnus Haraldsson | 1142 | 1145 | sigurd-munn-and-inge | missing; child co-king with his brothers | MEMBER (of sigurd-munn-and-inge; add to its rulers)
Inge Magnusson | 1196 | 1202 | beside sverre / haakon-iii | missing; Bagler king, held Oslo and Viken | CARD (kind claimant, like sigurd-slembe-and-magnus)
Erling Steinvegg | 1204 | 1207 | inge-ii | text only, in haakon-iii/inge-ii; Bagler king in Viken with Danish backing | MEMBER (of inge-ii)
Philip Simonsson | 1207 | 1217 | beside inge-ii | missing; Bagler king, kept eastern Norway under the 1208 settlement | CARD (kind claimant)
Haakon the Young | 1240 | 1257-05-05 | haakon-iv | missing; crowned co-king, listed by Wikipedia | MEMBER (of haakon-iv)
Skule Bårdsson | 1239-11-06 | 1240-05-24 | beside haakon-iv (contestedWith haakon-iv) | text only, in haakon-iv; proclaimed king at the Øyrating, held Trondheim and took Oslo | CARD (kind claimant)
Christian Michelsen's government | 1905-06-07 | 1905-11-18 | between oscar-ii and haakon-vii | gap; the cabinet held the king's powers after the Storting ended the union | MEMBER (of haakon-vii, or of a new short interregnum card)

#### Doubts
- Wikipedia's list does not include the Bagler kings or Skule; I counted them because the deck already gives Sigurd Slembe a claimant card. If the deck keeps only kings in the main line, they become MEMBERs of sverre / inge-ii / haakon-iv.
- Earlier Birkebeiner pretenders (Sigurd Markusfostre 1162–1163, Olav Ugjæva 1166–1169, Eystein Meyla 1174–1177) never held a centre of power for long; skipped.
- Quisling (Minister President 1942–1945) and Reichskommissar Terboven ran occupied Norway while Haakon VII was in exile. The deck counts monarchs, so I did not list them; they could be members of haakon-vii.
- 1448–1449 and 1481–1483 were council regencies (Sigurd Jonsson etc.); no ruler.
- 1814 gaps: Christian Frederick was regent from February before his election as king; same person.
- Magnus VII's card ends in 1343 although he ruled Norway in fact until 1355 (Haakon VI co-king from 1343). Date issue, not a missing ruler.
- The deck ends Harald V on 2026-08-28 with Haakon VIII after; I could not check this and left it as is.

### papacy

Every papal name's count matches the official list: Adrian/Hadrian 6, Alexander 7 (V antipope), Benedict 15 (X antipope),
Boniface 8 (VII antipope), Clement 14, Felix 3 (II antipope), Gregory 16, Innocent 13, John 21 (XVI antipope, no XX),
Leo 14, Pius 12, Stephen 9, Sylvester 3, Urban 8, and all single names. 265 distinct popes; the commonly quoted 267
counts Benedict IX's three terms separately (the deck gives him three cards).
Date gaps between cards are vacancies (sede vacante), not missing popes.
None missing.

### poland

Scope used: dukes, high dukes of Kraków (seniorate), kings, Duchy of Warsaw, then interwar and post-war leaders and presidents. Validator gaps: 1382–1384, 1444–1447, 1574–1576, 1795–1807; the first, second and fourth are real interregna with no ruler. The third hides a co-monarch.

Bezprym | 1031 | 1032 (killed spring 1032) | after mieszko-ii (inside its span) | text only, in mieszko-ii; seized power, drove Mieszko II into exile and sent the crown to the emperor | CARD
Otto Bolesławowic | 1032 | 1033 | mieszko-ii | missing; got a share when the country was split three ways (with Mieszko II and their cousin Dytryk) | MEMBER (of mieszko-ii)
Zbigniew | 1102-06-04 | 1107 | boleslaw-iii | text only, in boleslaw-iii; co-ruling duke of northern Poland (Greater Poland, Masovia) until his half-brother drove him out | MEMBER (of boleslaw-iii)
Bolesław II of Masovia | 1288-10 | 1288-12c | between leszek-ii and henry-probus | text only, in henry-probus ("Bolesław of Masovia held it"); held Kraków as high duke for a few weeks | CARD
Anna Jagiellon | 1575-12-15 (elected) / 1576-05-01 (crowned) | 1586-12-12 (Stephen's death; queen until 1587 election, died 1596) | stephen-bathory | gap 1574–1576; text only in henry-of-valois and stephen-bathory; elected and crowned as monarch in her own right, jointly with Báthory | MEMBER (add to rulers of stephen-bathory as co-ruler, like jadwiga)
Stanisław I Leszczyński (second reign) | 1733-09-12 | 1736-01-26 (abdicated) | after augustus-ii, beside augustus-iii (contestedWith augustus-iii) | text only, in stanislaw-i and augustus-iii; elected by the great majority of the szlachta and held Warsaw, then besieged in Gdańsk | CARD (stanislaw-i-restored)
Gabriel Narutowicz | 1922-12-11 | 1922-12-16 | pilsudski | text only, in pilsudski; first elected president, murdered after five days | CARD
Stanisław Wojciechowski | 1922-12-20 | 1926-05-14 | pilsudski | missing entirely; president while Piłsudski was out of office 1923–1926, overthrown in the May Coup | CARD

#### Doubts
- The pilsudski card runs 1918–1935 as de facto leader. If the deck prefers to keep Piłsudski as "the leader" for these years, Narutowicz and Wojciechowski could be MEMBERs of pilsudski instead. Maciej Rataj (acting president twice, 1922 and 1926) would then also be a member.
- Short repeat holders of Kraków who already have cards elsewhere: Mieszko III the Old (briefly took Kraków in 1191) and Władysław I the Elbow-high (held Kraków in 1289). Not missing persons; could be mentioned in casimir-ii / henry-probus.
- Wenceslaus II held Kraków from 1291, though his card starts in 1300 and przemysl-ii runs to 1296. Date overlap issue, not a missing ruler.
- 1795–1807 (no Polish state) and 1382–1384 / 1444–1447 interregna have no ruler and no card. The deck may want interregnum cards for them, but no one is missing.
- Bolesław the Forgotten (1030s) is probably legendary; skipped. Masław (Masovia, 1037–1047) ruled only a breakaway province; skipped.
- Bogdan Borusewicz and Grzegorz Schetyna were acting presidents for a few weeks in 2010 (Komorowski's card starts as acting president). Skipped.

### portugal

Compared against the standard list of Portuguese monarchs (Wikipedia "List of Portuguese monarchs"). Validator reports no gap over a year. Uncovered stretch: 1580-01-31 to 1580-06-24 (Governors of the Realm, between Henry's death and Anthony's acclamation). The 1383-85 crisis is carded with members; Peter III is carded as co-ruler with Maria I.

#### Missing rulers

Ferdinand II (Ferdinand of Saxe-Coburg and Gotha), King jure uxoris | 1837-09-16 | 1853-11-15 | co-ruler on maria-ii-restored (split it into "Maria II, again" 1834-05-26 to 1837-09-16 and "Maria II & Ferdinand II" 1837-09-16 to 1853-11-15), matching maria-i-and-peter-iii | text only (maria-ii-restored, peter-v) | recommendation: CARD (titled King on the birth of the heir; numbered among Portugal's kings and on the Wikipedia list; regent 1853-1855 afterwards)
Governors of the Realm (Archbishop Jorge de Almeida, João Telo, João de Mascarenhas, Francisco de Sá de Meneses, Diogo Lopes de Sousa) | 1580-01-31 | 1580-07 (circa; fled Lisbon as Anthony took it, later declared for Philip) | member of a new short interregnum card, or of henry | gap / text only (henry: "A council of five governors took over") | recommendation: MEMBER (collective regency with no king; no single ruler)

Totals: CARD 1, MEMBER 1.

#### Doubts
- Wikipedia returned HTTP 429 on every retry (60 s waits), so this deck was checked against the standard list from my own knowledge.
- Peter II ruled from 1667-11-23 (Afonso VI stripped of power) as Prince Regent, then king from 1683-09-12. His card starts 1683; the deck treats him as regent of a still-reigning brother. Not missing as a person, but 16 years of his real rule sit on the afonso-vi card.
- Similarly Prince John (John VI) ruled as regent for Maria I from 1792 (formally 1799) to 1816; skipped as regent of a reigning monarch.
- Philip I's card starts 1581-03-25; he controlled Lisbon from late August 1580 (Alcântara, 1580-08-25) and is often dated from 1580-09-12, and he was acclaimed by the Cortes of Tomar on 1581-04-16. Date check, not a missing ruler.
- Anthony of Crato's card runs to 1583; he held Lisbon only 1580-06-24 to 1580-08-25 and then the Azores. Fine as a claimant card.
- Beatrice is a member of crisis-1383 (Wikipedia notes her as disputed); fine.
- Afonso I: some lists date his kingship from 1139 (Ourique), others from Zamora 1143 or the papal bull of 1179. Deck uses 1139; acceptable.

### ptolemaic

Source: own knowledge (Wikipedia list of Ptolemaic rulers not fetched; standard list used).

Cleopatra I | -0180 c. | -0176 c. | in ptolemy-vi | text only (ptolemy-vi; coins in her name) | MEMBER (of ptolemy-vi; co-ruler/regent)
Ptolemy Eupator | -0152 c. | -0152 c. | in ptolemy-vi | not mentioned | MEMBER (of ptolemy-vi; co-regent for months)
Ptolemy VII Neos Philopator | -0145 c. | -0145 c. | in ptolemy-viii-and-cleopatra-ii | text only (that card; reign disputed) | MEMBER (of ptolemy-viii-and-cleopatra-ii)
Cleopatra VI Tryphaena | -0058 c. | -0057 c. | in berenice-iv | text only (berenice-iv) | MEMBER (of berenice-iv)
Ptolemy XIII | -0051 c. | -0047-01-13 | after ptolemy-xii-restored (split cleopatra-vii) | text only (cleopatra-vii); co-king, ruled alone after driving Cleopatra out 49-48 | CARD
Arsinoe IV | -0048-12 c. | -0047-03 c. | with Ptolemy XIII | text only (cleopatra-vii); queen proclaimed by the army in Alexandria | MEMBER (of the Ptolemy XIII card)
Ptolemy XIV | -0047 c. | -0044 c. | in cleopatra-vii | text only (cleopatra-vii) | MEMBER (of cleopatra-vii)
Caesarion (Ptolemy XV) | -0044-09 c. | -0030-08 c. | in cleopatra-vii | text only (cleopatra-vii, epilogue) | MEMBER (of cleopatra-vii; co-king)

Totals: 8 missing (CARD 1, MEMBER 7).

#### Doubts
- Existing rulers left off cards they belong to: Ptolemy VIII reigned jointly 0170-0164 and alone 0164-0163 (only in ptolemy-vi text); Cleopatra III co-ruled with Ptolemy X 0107-0101 and Berenice III with him 0101-0088, but ptolemy-x lists only Ptolemy X.
- Ptolemy Eupator's identity and number are disputed (some call him Ptolemy VII); Ptolemy VII's reign is itself doubted.
- Cleopatra VI Tryphaena may be the same person as Cleopatra V (Auletes's wife).
- Consorts with royal titles (Arsinoe II, Berenice II, Arsinoe III) and Ptolemy "the Son" (co-regent of Ptolemy II, 0267-0259) are not counted; add as MEMBERs only if the deck counts co-regents.

### rome

Source: Wikipedia "List of Roman emperors" (action API, fetched OK) + own knowledge for Gallic/Palmyrene rulers.

Lepidus | -0043-11-27 | -0036-09 (deposed) | after mark-antony | text only (antony-and-octavian, mark-antony) | MEMBER (of antony-and-octavian; third triumvir)
Diadumenian | 0218-05 c. (Augustus) | 0218-06 | in macrinus | text only (macrinus) | MEMBER (of macrinus)
Philip II | 0247 (Augustus) | 0249-09 | in philip-the-arab | text only (philip-the-arab) | MEMBER (of philip-the-arab)
Herennius Etruscus | 0251-05 c. (Augustus) | 0251-06 | in decius | text only (decius) | MEMBER (of decius)
Hostilian | 0251-06 | 0251-07 c. | in trebonianus-gallus | text only (trebonianus-gallus) | MEMBER (of trebonianus-gallus)
Volusianus | 0251-08 c. | 0253-08 | in trebonianus-gallus | text only (trebonianus-gallus) | MEMBER (of trebonianus-gallus)
Aemilian | 0253-07 c. | 0253-09 c. | after trebonianus-gallus | gap 0253-08 to 0253-10; text only (trebonianus-gallus, valerian-and-gallienus) | CARD
Saloninus | 0260 (Augustus at Cologne) | 0260 c. | in valerian-and-gallienus / gallic-empire | text only (gallic-empire) | MEMBER (of valerian-and-gallienus)
Laelianus | 0269 c. | 0269 c. | in gallic-empire | not mentioned | MEMBER (of gallic-empire; rival of Postumus at Mainz)
Marius | 0269 c. | 0269 c. | in gallic-empire | text only (gallic-empire) | MEMBER (of gallic-empire)
Victorinus | 0269 c. | 0271 c. | in gallic-empire | text only (gallic-empire) | MEMBER (of gallic-empire)
Tetricus II | 0273 c. (Caesar; Augustus 274?) | 0274 | in gallic-empire | not named | MEMBER (of gallic-empire)
Vabalathus | 0270 (king) / 0272 (Augustus) | 0272 c. | in zenobia | not named | MEMBER (of zenobia; nominal ruler, Zenobia regent)
Quintillus | 0270-01 c. | 0270-04 c. (some: 0270-09) | after claudius-ii | gap 0270-01 to 0270-09; text only (claudius-ii, aurelian) | CARD
Florian | 0276-06 c. | 0276-09 c. | after tacitus | text only (tacitus, probus) | CARD
Severus II | 0306-07-25 (Augustus) | 0307-04 c. (deposed; killed 0307-09) | after constantius-and-galerius | not mentioned | CARD
Maximinus II Daza | 0310 c. (Augustus; Caesar 0305-05-01) | 0313-08 c. | after constantine / with licinius | not mentioned | CARD
Valerius Valens | 0316 c. | 0317-01 c. | in licinius | not mentioned | MEMBER (of licinius)
Martinian | 0324-07 c. | 0324-09 c. | in licinius | not mentioned | MEMBER (of licinius)
Magnentius | 0350-01-18 | 0353-08-10 | after constans-and-constantius-ii (alongside constantius-ii) | text only (constans-and-constantius-ii, constantius-ii) | CARD
Vetranio | 0350-03-01 | 0350-12-25 | in constantius-ii | text only (constantius-ii) | MEMBER (of constantius-ii)
Nepotianus | 0350-06-03 | 0350-06-30 | with Magnentius | not mentioned; held Rome 28 days | MEMBER (of the Magnentius card)
Procopius | 0365-09-28 | 0366-05-27 | in valentinian-and-valens | text only (valentinian-and-valens); held Constantinople | CARD (claimant)
Valentinian II | 0375-11-22 | 0392-05-15 | after gratian-and-valens (spans theodosius) | text only (valentinian-and-valens, gratian-and-valens, theodosius) | CARD
Magnus Maximus | 0383-08 c. (proclaimed 0383 spring) | 0388-08-28 | alongside theodosius | text only (theodosius); recognised by Theodosius c. 384-387, held Rome 387-388 | CARD (claimant)
Arcadius | 0383-01-19 (Augustus) | 0395-01-17 (in deck span) | in theodosius | text only (theodosius) | MEMBER (of theodosius; co-Augustus)
Eugenius | 0392-08-22 | 0394-09-06 | alongside theodosius | text only (theodosius); held Rome | CARD (claimant)
Constantine III | 0407 (Britain; 0409 recognised by Honorius) | 0411-09 c. | alongside honorius | text only (honorius) | CARD (claimant)
Priscus Attalus | 0409-11 c. | 0410-07 c. (again 0414-0415) | alongside honorius | not mentioned; Alaric's emperor in Rome | CARD (claimant)
Constantius III | 0421-02-08 | 0421-09-02 | in honorius | not mentioned | MEMBER (of honorius; co-Augustus)

Totals: 31 missing (CARD 13, MEMBER 18).

#### Doubts
- Existing rulers with uncovered stretches (not counted above): Gratian was senior Augustus 0378-08 to 0383-08-25 but theodosius card has only Theodosius; Galerius ruled 0306-07 to 0311-05 but his only card ends 0306-07-25; Maximian's 306-308/310 return (with Maxentius) has no card.
- Eastern emperors after 395 (Theodosius II, Marcian, Leo I, Leo II, Zeno, Basiliscus) left out as outside a West-focused deck. But Theodosius II was sole emperor 0423-08-15 to 0423-11-20 (gap before johannes) and Leo I was the only recognised emperor in the interregna before majorian (1.2 yr) and anthemius (1.4 yr) - possibly MEMBERs of interregnum cards.
- Britannic Empire (Carausius 286-293, Allectus 293-296), Domitius Alexander (308-310, Africa), Silbannacus (c. 253), Jotapian/Pacatian/Uranius: regional usurpers, skipped; Carausius is the only borderline case (briefly tolerated by Diocletian/Maximian).
- Quintillus's end date is disputed (17 days vs. several months). Aemilian dates are approximate.
- Severus II and Maximinus Daza could instead be MEMBERs of a Tetrarchy card if the deck adds a 306-313 "Galerius" card.

### saudi

Source: Wikipedia was rate-limited (HTTP 429), so this check uses my own knowledge.

None missing. The seven rulers are Abdulaziz, Saud, Faisal, Khalid, Fahd, Abdullah and Salman. They have contiguous cards and the validator reports no gaps.

#### Doubts
- Abdulaziz's father Abd al-Rahman bin Faisal kept the title imam after 1902 but did not rule, so he is skipped.
- Earlier Saudi states (pre-1891) fall before the deck's first card.
- Crown Prince Faisal's de facto rule (1958–1960, 1962–1964) and Mohammed bin Salman (PM since 2022) did not hold the throne.

### scotland

Compared against Wikipedia "List of Scottish monarchs" (fetched, wikitext), plus royal.uk king-list dates cited there. Validator reports no gap over a year in this deck. Both interregnums (1290-1292, 1296-1306) are carded with Guardians as members; Edward Balliol has a claimant card.

#### Missing rulers

Amlaíb (Amlaíb mac Illuilb, Olaf son of Indulf) | 0973 (circa) | 0977 | overlapping kenneth-ii, placed after kenneth-ii start (kind monarch or claimant, contestedWith kenneth-ii) | text only (kenneth-ii: "In 977 he killed Olaf, son of Indulf") | recommendation: CARD (own row on the Wikipedia list, 973-977; the Annals of Tigernach call him "rí Alban" at his death in 977)
Eochaid (son of Rhun of Strathclyde) | 0878 | 0889 | member of giric (co-king) | text only (giric, donald-ii) | recommendation: MEMBER (of giric; Wikipedia gives him a row "878-889?" but says evidence is unclear and he may never have been king; his years are identical to Giric's)
Edmund (son of Malcolm III) | 1094-11-12 | 1097 | member of donald-iii (co-king for Donald's second reign) | text only (donald-iii, duncan-ii, edgar) | recommendation: MEMBER (of donald-iii; William of Malmesbury says he ruled half the kingdom with Donald; not on the Wikipedia list as a separate row)
Giric II (son of Kenneth III) | 0997 (circa) | 1005-03-25 | member of kenneth-iii | text only (kenneth-iii claim) | recommendation: MEMBER (of kenneth-iii; only some king-lists and the Prophecy of Berchán make him co-king)
Francis (II of France), King of Scots jure uxoris | 1558-04-24 | 1560-12-05 | member of mary | text only (mary) | recommendation: MEMBER (of mary; granted the crown matrimonial by the Scottish Parliament in Nov 1558; styled King of Scots; never ruled in Scotland)
Henry Stuart, Lord Darnley ("King Henry") | 1565-07-29 | 1567-02-10 | member of mary | text only (mary) | recommendation: MEMBER (of mary; proclaimed King of Scots the day before the wedding, coins and acts in "Henry and Mary", but never had the crown matrimonial)

Totals: CARD 1, MEMBER 5.

#### Doubts
- Amlaíb's start is unknown (between 973 and 977); Wikipedia: "must have taken power between 973 and 977". He may have been a rival king rather than sole king, so kind "claimant" might suit better.
- Eochaid could be raised to a CARD if the deck follows the Wikipedia table literally (it gives him a row, in italics).
- Donald III's card spans 1093-11-13 to 1097 and overlaps duncan-ii (May to Nov 1094). Not a missing ruler, but the card might be better split into Donald III (1093-1094) and "Donald III & Edmund, again" (1094-1097), which would give Edmund a co-ruler slot.
- Regents and Guardians for minors (Albany, Murdoch, Arran, Mary of Guise, Moray, Lennox, Mar, Morton) are regents of a reigning monarch, so skipped; Albany and Murdoch are named in card text already.
- Mary's third husband, Bothwell (Duke of Orkney), was never styled king; skipped.

### spain

Compared against the standard list of Spanish monarchs (Wikipedia "List of Spanish monarchs") and, for the republican/interregnum cards, heads of state and prime ministers of those periods. Validator reports no gap over a year. Uncovered stretches: 1700-11-01 to 11-16 (regency junta), 1808-05-06 to 1808-06-06 (Napoleon holds the crown; Murat governs), 1885-11-25 to 1886-05-17 (regency of Maria Christina, no king until Alfonso XIII's birth), 1975-11-20 to 11-22 (Council of the Regency).

#### Missing rulers

Philip I (Philip the Handsome) | 1504-11-26 | 1506-09-25 | co-ruler on joanna (split joanna into "Joanna & Philip I" 1504-11-26 to 1506-09-25 and "Joanna" 1506-09-25 to 1516-03-14) | text only (joanna) | recommendation: CARD (king of Castile jure uxoris; on the Wikipedia list; held power from the Treaty of Villafáfila, 1506-06-27, recognised by the Cortes of Valladolid in July 1506)
Archduke Charles ("Charles III", later Emperor Charles VI) | 1705-10-09 | 1714-09-11 | after philip-v start (kind claimant, contestedWith philip-v) | text only (philip-v) | recommendation: CARD (rival king in the War of the Spanish Succession; recognised in Aragon, Catalonia and Valencia, proclaimed in Madrid in 1706 and held it again in Sept-Nov 1710)
Maria Christina of Austria (regent, throne vacant) | 1885-11-25 | 1886-05-17 | member of alfonso-xiii (or of a short regency card filling the gap) | gap / text only (alfonso-xiii) | recommendation: MEMBER (head of state with no king for six months; regent for her son after his birth; text names her already)
Joachim Murat (Lieutenant General of the Kingdom, for Napoleon) | 1808-05-06 | 1808-06-06 | member of joseph-i (or of ferdinand-vii) | gap / text only (ferdinand-vii) | recommendation: MEMBER (governed Madrid after the Bayonne abdications until Joseph was named king)
Miguel Primo de Rivera (dictator) | 1923-09-13 | 1930-01-28 | member of alfonso-xiii | text only (alfonso-xiii) | recommendation: MEMBER (of alfonso-xiii; held real power under the king, the same situation the Italy deck handles with a Mussolini leader card - see Doubts)
Miguel Cabanellas (President, Junta de Defensa Nacional) | 1936-07-24 | 1936-10-01 | member of second-republic (rebel zone, before the franco card starts) | absent | recommendation: MEMBER (of second-republic)
José Miaja / Segismundo Casado (Council of National Defence) | 1939-03-05 | 1939-03-28 | member of second-republic | text only (second-republic member note "Casado's coup") | recommendation: MEMBER (of second-republic; controlled Madrid at the end of the war; Miaja presided)
Alejandro Lerroux (Prime Minister) | 1933-09-12 | 1935-09-25 | member of second-republic | absent | recommendation: MEMBER (PM 1933-09-12 to 1933-10-08, 1933-12-16 to 1934-04-28, 1934-10-04 to 1935-09-25)
Diego Martínez Barrio (Prime Minister; acting President again 1939) | 1933-10-08 | 1933-12-16 | member of second-republic (already a member as acting President 1936) | partly hidden | recommendation: MEMBER (extend existing member note: PM 1933-10-08 to 12-16; PM for a night 1936-07-19; acting President 1939-02-27 to 1939-03-31 circa)
Ricardo Samper (Prime Minister) | 1934-04-28 | 1934-10-04 | member of second-republic | absent | recommendation: MEMBER
Joaquín Chapaprieta (Prime Minister) | 1935-09-25 | 1935-12-14 | member of second-republic | absent | recommendation: MEMBER
Manuel Portela Valladares (Prime Minister) | 1935-12-14 | 1936-02-19 | member of second-republic | absent | recommendation: MEMBER
Santiago Casares Quiroga (Prime Minister) | 1936-05-13 | 1936-07-19 | member of second-republic | absent | recommendation: MEMBER (PM when the generals rose)
José Giral (Prime Minister) | 1936-07-19 | 1936-09-04 | member of second-republic | absent | recommendation: MEMBER

Totals: CARD 2, MEMBER 12.

#### Doubts
- Wikipedia returned HTTP 429 on every retry (60 s waits), so this deck was checked against the standard list from my own knowledge.
- Ferdinand II has a card only as co-ruler with Isabella (to 1504-11-26), but he went on reigning as King of Aragon until 1516-01-23 and governed Castile as regent 1507-1516. He is not missing as a person, but 1504-1516 of his reign has no card of his own. Strongly consider a "Ferdinand II, alone" card (Aragon, 1504-11-26 to 1516-01-23) or making him a co-ruler on the joanna card.
- Philip I's start date: 1504-11-26 (nominal, styled king with Joanna from Isabella's death), 1506-06-27 (Villafáfila, takes government) or 1506-07-12 (Cortes of Valladolid). Wikipedia lists him for 1506.
- Archduke Charles: start could be 1703-09-12 (proclaimed in Vienna) instead of 1705-10-09 (Barcelona capitulates); end could be 1713 (Utrecht; he had left Barcelona 1711-09-27) or 1714-09-11 (fall of Barcelona). He never formally renounced until 1725.
- Primo de Rivera vs. Mussolini: if the Spain deck wants the same treatment as Italy, Primo de Rivera becomes a CARD (kind leader, 1923-09-13 to 1930-01-28). As the deck stands (monarchs plus interregnum cards only), MEMBER.
- Second Republic PMs: the existing member list mixes Presidents and only some PMs; I listed every PM missing so the card is complete. If the deck wants heads of state only, only Cabanellas and Miaja/Casado matter.
- Carlist claimants Carlos V (1833-1845) and Carlos VII (member already) held parts of the north but never Madrid; skipped as pretenders.
- Supreme Central Junta (1808-1810) and Regency Council (1810-1814) ruled patriot Spain in captive Ferdinand VII's name; regents of a reigning monarch, skipped.
- 1975-11-20 to 11-22 Council of the Regency (Alejandro Rodríguez de Valcárcel) and 1700-11-01 to 11-16 regency junta: two-day/two-week regencies, not counted.

### sweden

None missing.

Every monarch from Gustav I (1523) to Carl XVI Gustaf has a card, and the validator reports no date gaps.

#### Doubts
- Charles IX ruled as regent from 1599 and took the title king only in 1604; the deck starts his card in 1599. Fine.
- 1809-03-29 to 1809-06-06: Duke Charles (later Charles XIII) was regent after Gustav IV Adolf's overthrow; the card starts at his accession. Same person, so no one is missing.
- The deck starts in 1523, so medieval kings and the Sture regents are out of scope.

### thailand

Wikipedia was rate-limited (HTTP 429); checked against the standard list of Ayutthaya, Thonburi and Chakri kings from own knowledge. Dates are circa where the chronicles disagree.

Borommarachathirat III (Intharacha II) | 1488 | 1491 | after borommatrailokkanat | gap (3-year gap before ramathibodi-ii); text only in ramathibodi-ii "previously" | CARD
Borommarachathirat IV (Nò Phutthangkun) | 1529 | 1533 | after ramathibodi-ii | gap (part of the 5-year gap before chairacha); text only in ramathibodi-ii hook and chairacha "previously" | CARD
Ratsadathirat (child king) | 1533 | 1534 | after borommarachathirat-iv | gap; text only in chairacha | CARD
Chao Fa Chai (Sanphet VI) | 1656-08 (c.) | 1656-08 (c.; a few days to weeks) | after prasat-thong | gap before narai; text only in narai | CARD
Si Suthammaracha (Sanphet VII) | 1656-08 (c.) | 1656-10-26 | after chao-fa-chai | gap before narai; text only in narai | CARD
Uthumphon | 1758-04-26 (c.) | 1758-08 (c.; about 3 months) | after borommakot | gap; text only in borommakot hook and ekkathat | CARD

#### Doubts
- Prasat Thong's end date: the deck has 1655-08-08. Most king lists put his death in 1656 (Aug). That would line up with Chai and Si Suthammaracha in 1656 and Narai's accession on 1656-10-26. Check this before dating the two new cards.
- 1767-04-07 → 1767-12-28: after Ayutthaya fell there was no king. Burmese garrisons and regional strongmen held the land (Taksin, and the "Chumnum" of Phimai, Phitsanulok, Fang and Nakhon Si Thammarat). Taksin's card could begin at the recapture of Ayutthaya (1767-11) or name the regional lords as members. None of them was a recognised king of Siam.
- Yotfa and Si Sudachan already share a card. Worawongsathirat has his own card even though Thai lists traditionally exclude him. Both are fine.
- The chronicle dates for 1488–1534 vary by a year in the different versions (Luang Prasoet vs. the later chronicles).

### umayyad

Source: Wikipedia was rate-limited (HTTP 429 even after waiting 60 s), so this check uses my own knowledge of the standard lists (Umayyad Caliphate; Emirate/Caliphate of Córdoba; Hammudid dynasty).

None missing.

Every Damascus caliph (Mu'awiya I to Marwan II, plus Ibn al-Zubayr as a claimant), every Córdoba emir/caliph (Abd al-Rahman I to Hisham III) and the Córdoba Hammudids (Ali, al-Qasim, Yahya) has a card. The Amirid hajibs al-Mansur, al-Muzaffar and Sanchuelo appear as co-rulers.

#### Doubts
- 750–756 gap (validator: 6.3 years): no Umayyad ruled. Al-Andalus was held by the governor Yusuf al-Fihri. That is correct for a dynasty deck, not a missing ruler.
- 1026–1027 gap (1.4 years, before Hisham III): Córdoba was run by its notables and had no caliph. This is not a missing ruler.
- Muhammad II was deposed in Nov 1009 and restored briefly in May–July 1010. His card (1009-02-15 → 1010-07-23) runs through Sulayman's first tenure instead of splitting it. That is a dating question, not a missing person.
- Al-Qasim's card (1018–1023) covers both of his tenures, around Yahya's 1021–1022 tenure. This is acceptable because Yahya has his own cards.
- Later Hammudids (Idris I–II, Hasan, Muhammad of Málaga/Algeciras, 1035–1058) styled themselves caliph but never held Córdoba. They are outside the deck's scope (skipped).

### venice

Source: own knowledge (no Wikipedia fetch made). Validator gap: domenico-flabanico.

Domenico Orseolo | 1032 | 1032 | after reign pietro-barbolano | gap (1030 to 1032); text only | CARD (held the palace one day)
Maurizio II Galbaio | 0796 | 0804 | giovanni-galbaio | text only | MEMBER (of giovanni-galbaio; co-doge)
Beato | 0804 | 0811 | obelerio | text only | MEMBER (of obelerio; co-doge)
Valentino | 0805 | 0811 | obelerio | not mentioned | MEMBER (of obelerio; co-doge)
Giovanni Tradonico | 0836 | 0863 | pietro-tradonico | not mentioned | MEMBER (of pietro-tradonico; co-doge)
Giovanni Orseolo | 1002 | 1007 | pietro-ii-orseolo | not mentioned | MEMBER (of pietro-ii-orseolo; co-doge)

#### Doubts
- Co-doges are not counted as separate doges in the standard list; MEMBER is enough. Others who later became doge in their own right (Giovanni Galbaio, Giovanni I and II Partecipazio, Pietro IV Candiano, Otto Orseolo) already have cards.
- 1030-1032 gap may also want a short interregnum card naming Domenico Orseolo, since the office was vacant most of that time.

### vietnam

Wikipedia was rate-limited (HTTP 429); checked against the standard list of Vietnamese monarchs (Đại Việt sử ký toàn thư order) from own knowledge. Dates are Gregorian approximations of lunar dates and are marked circa.

#### Missing rulers with an attested reign
Twelve Warlords (Ngô Xương Xí, Đỗ Cảnh Thạc, Trần Lãm, Kiều Công Hãn, Nguyễn Khoan, Ngô Nhật Khánh, Lý Khuê, Nguyễn Thủ Tiệp, Lã Đường, Nguyễn Siêu, Kiều Thuận, Phạm Bạch Hổ) | 0965 | 0968 | after ngo-xuong-van, before dinh-bo-linh | gap (3.0-year gap before dinh-bo-linh) | MEMBER (of a new interregnum card "Anarchy of the 12 Warlords"; none of them ruled the whole country)
Lê Long Việt (Lê Trung Tông) | 1005-11 (c.) | 1005-11 (c.; 3 days) | after le-hoan, before le-long-dinh | text only (le-long-dinh paragraph and claim) | CARD
Hồ Hán Thương | 1401 (c. 1401-01) | 1407-06 (captured by the Ming) | after ho-quy-ly; ho-quy-ly should end in 1401 | hidden in ho-quy-ly (1400–1407 covers both; text says Quý Ly abdicated in 1401) | CARD
Mạc Đăng Doanh (Mạc Thái Tông) | 1530-01 (c.) | 1540-01 (c., died) | after mac-dang-dung; mac-dang-dung should end in 1529/1530 and keep Đăng Dung's retired-emperor power in its text | hidden in mac-dang-dung (1527–1541) and in mac-phuc-hai's text | CARD
Mạc Toàn | 1592 (late) | 1593 (captured and killed) | after mac-mau-hop | missing (Mậu Hợp passed the throne to him as Thăng Long fell) | CARD
Trần Cảo (rebel emperor, era name Thiên Ứng) | 1516 | 1516 (held Thăng Long briefly) | inside le-chieu-tong | text only (le-tuong-duc, le-chieu-tong) | MEMBER (of le-chieu-tong; a rival who occupied the capital)

#### Trịnh and Nguyễn lords: decision
They belong in the deck, but as MEMBERs, not as cards of their own. The Trịnh chúa ran the Lê court in the emperor's name from 1545 to 1786, which is the same position as a shogun or a hereditary regent. The deck already gives every Lê emperor a card and tells the Trịnh story in those cards' text, so naming each lord on the matching cards removes the hand-waving without doubling the timeline. The Nguyễn chúa were de facto sovereigns of Đàng Trong (the south) from about 1600 to 1777, nominally Lê vassals. Under the deck's monarchs scope they are not throne-holders, but by the user's rule ("every person who ruled") they ruled, so list them as MEMBERs too. If the deck later adds parallel tracks, the Nguyễn lords would become "leader" cards contestedWith the Lê emperors. Nguyễn Kim, leader of the Lê restoration, is included as the Trịnh lords' forerunner.

Nguyễn Kim (Lê restoration leader) | 1533 | 1545 | — | text only (le-trang-tong) | MEMBER (of le-trang-tong)
Trịnh Kiểm | 1545 | 1570 | — | text only | MEMBER (of le-trang-tong, le-trung-tong, le-anh-tong)
Trịnh Cối | 1570 | 1570 (months; defected to the Mạc) | — | text only (le-anh-tong) | MEMBER (of le-anh-tong)
Trịnh Tùng | 1570 | 1623 | — | text only | MEMBER (of le-anh-tong, le-the-tong, le-kinh-tong, le-than-tong)
Trịnh Tráng | 1623 | 1657 | — | text only | MEMBER (of le-than-tong, le-chan-tong, le-than-tong-2)
Trịnh Tạc | 1657 | 1682 | — | text only | MEMBER (of le-than-tong-2, le-huyen-tong, le-gia-tong, le-hy-tong)
Trịnh Căn | 1682 | 1709 | — | text only | MEMBER (of le-hy-tong, le-du-tong)
Trịnh Cương | 1709 | 1729 | — | text only (le-du-tong) | MEMBER (of le-du-tong, le-duy-phuong)
Trịnh Giang | 1729 | 1740 | — | text only | MEMBER (of le-duy-phuong, le-thuan-tong, le-y-tong)
Trịnh Doanh | 1740 | 1767 | — | text only (le-y-tong, le-hien-tong-1740) | MEMBER (of le-hien-tong-1740)
Trịnh Sâm | 1767 | 1782 | — | text only (le-hien-tong-1740, le-chieu-thong) | MEMBER (of le-hien-tong-1740)
Trịnh Cán | 1782-09 (c.) | 1782-10 (c.) | — | not mentioned | MEMBER (of le-hien-tong-1740)
Trịnh Khải (Trịnh Tông) | 1782 | 1786 | — | text only (le-hien-tong-1740) | MEMBER (of le-hien-tong-1740)
Trịnh Bồng | 1786 | 1787 | — | not mentioned | MEMBER (of le-chieu-thong)
Nguyễn Hoàng | 1558 | 1613 | — | text only (le-anh-tong, le-kinh-tong) | MEMBER (of le-anh-tong, le-the-tong, le-kinh-tong)
Nguyễn Phúc Nguyên | 1613 | 1635 | — | not named | MEMBER (of le-kinh-tong, le-than-tong)
Nguyễn Phúc Lan | 1635 | 1648 | — | not named | MEMBER (of le-than-tong, le-chan-tong)
Nguyễn Phúc Tần | 1648 | 1687 | — | not named | MEMBER (of le-chan-tong, le-than-tong-2, le-huyen-tong, le-gia-tong, le-hy-tong)
Nguyễn Phúc Thái | 1687 | 1691 | — | not named | MEMBER (of le-hy-tong)
Nguyễn Phúc Chu | 1691 | 1725 | — | not named | MEMBER (of le-hy-tong, le-du-tong)
Nguyễn Phúc Chú | 1725 | 1738 | — | not named | MEMBER (of le-du-tong, le-duy-phuong, le-thuan-tong, le-y-tong)
Nguyễn Phúc Khoát | 1738 | 1765 | — | not named | MEMBER (of le-y-tong, le-hien-tong-1740)
Nguyễn Phúc Thuần | 1765 | 1777 | — | not named | MEMBER (of le-hien-tong-1740, nguyen-nhac)
Nguyễn Phúc Dương (Tây Sơn puppet lord) | 1776 | 1777 | — | not named | MEMBER (of nguyen-nhac)
Nguyễn Phúc Ánh as lord in Gia Định | 1780 | 1802-06-01 | — | gia-long card starts only in 1802 | MEMBER (of nguyen-nhac, quang-trung, canh-thinh). The alternative is to start gia-long in 1780 with title "Nguyễn Ánh".

#### Doubts
- Mạc Kính Chỉ was proclaimed emperor in Hải Dương in 1592–1593 and held much of the east for a few months. The later Mạc of Cao Bằng (Mạc Kính Cung 1593–1625, Mạc Kính Khoan 1623–1638, Mạc Kính Vũ 1638–1677) held only Cao Bằng under Ming/Qing protection. Treat them as pretenders: at most MEMBERs of le-the-tong and its successors, not cards.
- Lê Quang Trị (1516, days), Lê Bảng (1518–1519) and Lê Do (1519) were puppets of rival generals during the Lê Chiêu Tông civil war. Their control of Thăng Long is unclear, so they are not listed as missing. They could be named as MEMBERs of le-chieu-tong.
- Nguyễn Nhạc's card ends 1788-12-22. He kept ruling Quy Nhơn as "Central Emperor" until his death in 1793, so the end date may need to be 1793. Nguyễn Lữ ("Eastern Lord", Gia Định) could be a MEMBER of nguyen-nhac.
- The 1504/1505 gap before le-uy-muc and the 1925-11 → 1926-01 gap before bao-dai are normal waits between reigns, not missing rulers.
- Kiều Công Tiễn (937–938) comes before the deck's first card (939), so he is out of span.

