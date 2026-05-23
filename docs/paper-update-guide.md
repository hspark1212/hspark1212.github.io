# Paper Update Guide

| Case            | Rule                                                                         |
| --------------- | ---------------------------------------------------------------------------- |
| 새 논문 추가    | `publications.ts`에만 먼저 추가. `research`/`featured`는 따로 판단.          |
| 실제 게재 확인  | DOI/publisher/Google Scholar로 최종 게재 여부 확인. 게재됨 -> preprint 대체. |
| preprint 대체   | arXiv/ChemRxiv URL/journal을 실제 journal citation/DOI로 교체.               |
| preprint 유지   | 실제 게재 전이면 `arXiv preprint (year)` 또는 `ChemRxiv preprint (year)`.    |
| 번호            | 최신순. 같은 year면 publication date 최신순. 중복 금지.                      |
| selected papers | `featuredPaperNumbers`는 user 확인 후에만 수정.                              |
| journal 표기    | volume/page 있으면 `Journal. volume, pages (year)`. 없으면 `Journal (year)`. |
| URL             | Google Scholar 금지. DOI/arXiv/publisher official 사용.                      |
| highlighted     | 임의 결정 금지. `isHighlighted`/featured 여부는 user에게 물어본 뒤 수정.     |
| 검증            | `npm run check`, 번호 중복 검사, dev 화면 링크 클릭.                         |
