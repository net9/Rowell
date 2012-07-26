#Rowell

##Introduction

Rowell is a pure front-end web UI for you-know-which bbs. The web terminal relies on pybbs developed by Henryhu as back-end data exchange interface, and
Bootstrap from Twitter as the front-end framework. 

Rowell is still being developed and has released its 0.2.3 version, which supports the following functionals:

* Login/logout with session cookies.

* All boards listing and fav boards listing, including subfolders.

* Posts listing in boards and various navigations.

* Post reading and navigations.

* Writing new posts in normal mode, reply posts in S/R/N/A modes. Anonymous posting and random qmd are supported.


##How to Use it

You can now try our alpha version at:

    http://bbs9.roach-works.com

Later we will try to set a build on the department internal servers. However since it is pure front-end, you can simply checkout all codes, and open index.html as a local webpage in your browser, or build it anywhere that supports HTTP service. Note that if Rowell is opened locally, it will be unable to save cookies and therefore cannot hold your login informations.

Rowell has been tested on Firefox 8+ and Chrome 19+ browsers. IE is not recommended for browsing, and we are sorry for this incompatibility.

##Development Plan

* Unread tags clearing.

* Configuration system.

* Simple ASCII art interpreter.

* Personal information viewing, searching and editing.

* Favboards management.

##Change Logs
####Version 0.2.3
Release date: 07/26/2012

Cumulative update. Various modifications and new functions.

* A expandible hotkey management system is added to Rowell, with several hotkeys added: left and right arrow keys for prev/next, p and r for writing and replying posts, ctrl+Enter and esc for quick publishing and cancelling posts being written.

* Anonymous posting is now supported on anonymous-available boards. It will automatically detects the availability of anonymous posting.

* Random qmd is now supported, Default qmd settings(number or random) will be stored.

* Several UI adjustments: top sub-navigation bars are added. Margins and positions are adjusted.

* A rare bug on ASCII control chars is fixed.

####Version 0.2.2
Release date: 07/02/2012

Cumulative update. Various modifications and new functional on UI.

* A completely new, robust and easy-expandible path structure is now working, with subfolder displaying and visiting supported.

* Four types of same-topic navigating are supported: prev, next, head and latest posts in threads.

* Loading logo is added when a request hangs over 500ms.

* A confirm window will popup when user tries to close the posting window in any way.

* Other minor modifications including bug fixing, modification for consistence to pybbs (Chinese board names), and UI adjustments (unread column is now widened).

####Version 0.2.1
Release date: 06/16/2012

Cumulative update. Various modifications and new functional on UI.

* Monospaced font is now supported in reading posts.

* Notification displaying time decreases from 3s to 2s. User can click anywhere on the notif. bar besides the close button to close it immediately.

* Decreased the width of entire container from >1100px downto 960px, making it looks better under low-resolutional screens.

* A bug from pybbs is fixed, which used to cause exceptions when reading posts containing 0x80 chars.

* First page, last page, and jump to certain position in board viewing is now supported.

Current Existing bug:

* Monospaced font is still not perfectly performing on some ASCII arts and posts.

####Version 0.2.0
Release date: 06/15/2012

* Writing posts in normal mode are supported

* Replying in S/N/A/R modes are supported. Anonymous posting and random qmd are not supported for writing or replying yet.

* UI slightly adjusted.

####Version 0.1.3
Release date: 06/14/2012

* A popup panel for writing and replying posts are added, UI design finished.

* First/Last page buttons, prev/next buttons for same topic posts, and manage favboards button are added to UI, no actual functionals for now.

* Descriptions at the footer are adjusted.

####Version 0.1.2
Release date: 06/14/2012

*  Notification system is added, an alert info box will popup at the top when a notification arrives. Currently post/boards out of range info and network error are supported. The notifications can be easily expanded for future usage.

* CORS is supported when error occurs. Correspondingly, "retry" args are removed from several functions in bbs_view.js. The error type detection now purely depends on the http status code.

* UI improvements: the post area now has a minimum height of 480px, giving the next and prev button a fixed position for most of the short
posts. 
Contents in footer is slightly modified. Unread posts and boards now have a new icon.

* Google Analysis code is added for stats.

####Version 0.1.1
Release date: 06/10/2012

* Bug fixed: A previous bug that appears in newer version of firefox may receive ajax response as XML as default settings, which cause a XML parsing error. It has been fixed by setting the response to plain text in order to be compatible to both Chrome and Firefox.

####Version 0.1
Release date: 06/10/2012

* Post viewing is now supported with html encoded, ASCII control characters eliminated, displaying in plain texts. Prev and next post button are also provided for navigation.

* Several bugs are fixed, including tags that are not hided when loading the UI and other minor bugs.

* Refinements on UI design.

Current existing bug:

* Due to the same CORS error in v0.0.4, the browser may report an error in console when user tries to read next post if it already reaches the end of the board.(This bug has been fixed in v0.1.2.)

####Version 0.0.4
Release date: 06/06/2012

* Board viewing with next/prev button is supported, with all posts listed in tables.

* Several bug fixed, including html encoding problem that may cause injection, and incomplete board and post listing bug.

* Some refinement on the UI design.

Current existing bug:

* When reaching the bottom of a board, next button will lead to an error since incomplete CORS support. (This bug has been fixed in v0.1.2.)

####Version 0.0.3
Release date: 06/06/2012

* Board list viewing is supported, all boards(or favourite boards) are displayed in tables.

* Secondary navigation bar now works, displaying the current path of user's location.

####Version 0.0.2
Release date: 06/05/2012

* Login and logout functional added, with CORS newly supported from pybbs. Users will be redirected to default pybbs login page, then input authorization code back. 

* Session cookie is stored. When user logs out, the session cookie will be removed.

* Footers and "unimplemented" popup are added to UI. Several other minor improvement on UI design.


####Version 0.0.1
Release date: 06/04/2012

First build. Basic UI framework built based on Twitter Bootstrap. No actural functions supported.

