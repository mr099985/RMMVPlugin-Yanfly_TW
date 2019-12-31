 * @plugindesc v1.19 在訊息視窗中添加更多功能，自定義對話的顯示和功能。
 * @author Yanfly Engine Plugins ( 翻譯 : ReIris )
 *
 * @param ---General---
 * @text ---一般---
 * @default
 *
 * @param Default Rows
 * @text 預設行數
 * @parent ---General---
 * @type number
 * @min 0
 * @desc 訊息視窗的預設行數。
 * 預設值 : 4
 * @default 4
 *
 * @param Default Width
 * @text 預設寬度
 * @parent ---General---
 * @desc 訊息視窗的預設寬度。
 * 預設值 : Graphics.boxWidth
 * @default Graphics.boxWidth
 *
 * @param Face Indent
 * @text 頭像縮排
 * @parent ---General---
 * @desc 如果使用頭像，設定需要縮排多少文字。
 * 預設值 : Window_Base._faceWidth + 24
 * @default Window_Base._faceWidth + 24
 *
 * @param Fast Forward Key
 * @text 訊息快進按鍵
 * @parent ---General---
 * @desc 這是用於快進的按鍵。
 * @default pagedown
 *
 * @param Enable Fast Forward
 * @text 是否可以快進訊息？
 * @parent ---General---
 * @type boolean
 * @on 是
 * @off 否
 * @desc 預設情況下訊息是否可以使用快進按鍵。
 * 否 - false     是 - true
 * @default true
 *
 * @param Word Wrapping
 * @text 自動換行
 * @parent ---General---
 * @type boolean
 * @on 是
 * @off 否
 * @desc 預設情況下是否使用自動換行？
 * 否 - false     是 - true
 * @default false
 *
 * @param Description Wrap
 * @text 描述自動換行
 * @parent ---General---
 * @type boolean
 * @on YES
 * @off NO
 * @desc 是否讓描述使用自動換行？
 * 否 - false     是 - true
 * @default false
 *
 * @param Word Wrap Space
 * @text 換行空白
 * @parent ---General---
 * @type boolean
 * @on 是
 * @off 否
 * @desc 是否插入帶手動換行的空格？
 * 否 - false     是 - true
 * @default false
 *
 * @param Tight Wrap
 * @text 緊縮換行
 * @parent ---General---
 * @type boolean
 * @on 是
 * @off 否
 * @desc 如果在訊息視窗中使用頭像，訊息將會緊縮換行。
 * 否 - false     是 - true
 * @default false
 *
 * @param ---Font---
 * @text ---字體---
 * @default
 *
 * @param Font Name
 * @text 字體名稱
 * @parent ---Font---
 * @desc 訊息視窗使用的預設字體。
 * 預設值 : GameFont
 * @default GameFont
 *
 * @param Font Name CH
 * @text 中文字體名稱
 * @parent ---Font---
 * @desc 訊息視窗使用的預設中文字體。
 * 預設值 : SimHei, Heiti TC, sans-serif
 * @default SimHei, Heiti TC, sans-serif
 *
 * @param Font Name KR
 * @text 韓文字體名稱
 * @parent ---Font---
 * @desc 訊息視窗使用的預設韓文字體。
 * 預設值 : Dotum, AppleGothic, sans-serif
 * @default Dotum, AppleGothic, sans-serif
 *
 * @param Font Size
 * @text 字體大小
 * @parent ---Font---
 * @type number
 * @min 1
 * @desc 訊息視窗使用的預設字體大小。
 * 預設: 28
 * @default 28
 *
 * @param Font Size Change
 * @text 更改字體大小
 * @parent ---Font---
 * @type number
 * @min 1
 * @desc 當使用 \{ 跟 \} 控制字元時所調整的字體大小。
 * 預設 : 12
 * @default 12
 *
 * @param Font Changed Max
 * @text 字體最大值
 * @parent ---Font---
 * @type number
 * @min 1
 * @desc 使用 \{ 可以調整的最大字體。
 * 預設: 96
 * @default 96
 *
 * @param Font Changed Min
 * @text 字體最小值
 * @parent ---Font---
 * @type number
 * @min 1
 * @desc 使用 \{ 可以調整的最小字體。
 * 預設: 12
 * @default 12
 *
 * @param Font Outline
 * @text 字體描邊
 * @parent ---Font---
 * @type number
 * @min 0
 * @desc 訊息的預設描邊寬度。
 * 預設: 4
 * @default 4
 *
 * @param Maintain Font
 * @text 保持字體變化
 * @parent ---Font---
 * @type boolean
 * @on 是
 * @off 否
 * @desc 改變字體名稱或大小時，是否在之後的訊息中
 * 保持此變更。  否 - false     是 - true
 * @default false
 *
 * @param ---Name Box---
 * @text ---姓名視窗---
 * @default
 *
 * @param Name Box Buffer X
 * @text 姓名視窗移動 X
 * @parent ---Name Box---
 * @type number
 * @desc 移動多少姓名視窗的 X 座標。
 * @default -28
 *
 * @param Name Box Buffer Y
 * @text 姓名視窗移動 Y
 * @parent ---Name Box---
 * @type number
 * @desc 移動多少姓名視窗的 Y 座標。
 * @default 0
 *
 * @param Name Box Padding
 * @text 姓名視窗留白
 * @parent ---Name Box---
 * @desc 姓名視窗留白的值。
 * @default this.standardPadding() * 4
 *
 * @param Name Box Color
 * @text 姓名視窗顏色
 * @parent ---Name Box---
 * @type number
 * @min 0
 * @max 31
 * @desc 這是用於姓名視窗的文本顏色。
 * @default 0
 *
 * @param Name Box Clear
 * @text 姓名視窗透明
 * @parent ---Name Box---
 * @type boolean
 * @on 是
 * @off 否
 * @desc 姓名視窗是否透明。
 * 否 - false     是 - true
 * @default false
 *
 * @param Name Box Added Text
 * @text 姓名視窗追加文本
 * @parent ---Name Box---
 * @desc 只要使用姓名視窗，始終添加此文本。
 * 這可用於自動設置顏色。
 * @default \c[6]
 *
 * @param Name Box Auto Close
 * @text 姓名視窗自動關閉
 * @parent ---Name Box---
 * @type boolean
 * @on 是
 * @off 否
 * @desc 每次姓名視窗顯示不同的名稱時關閉訊息視窗？
 *  是 - true     否 - false
 * @default false
 *
 * @help
 * ============================================================================
 * 介紹
 * ============================================================================
 * 雖然 RPG Maker MV Ace 肯定會對消息系統進行大量改進，但添加更多功能
 *（例如姓名視窗，轉換控制字元以描繪圖標和 / 或道具名稱，武器，盔甲等）
 * 並不會有什麼壞處，以更快又時尚的方式。
 * 此插件還使開發人員能夠在遊戲期間調整消息視窗的大小，為其提供單獨的字體，並為
 * 玩家提供對話快進功能。
 * ============================================================================
 * 自動換行
 * ============================================================================
 * 現在可以通過訊息系統進行自動換行。
 * 您可以使用插件命令啟用和禁用自動換行。
 * 使用自動換行時，如果詞語要延伸到訊息視窗的區域，它將自動轉到以下行。
 * 也就是說，自動換行將禁用編輯器的換行符，並要求您使用插件提供的換行符號：
 *
 * <br> 或 <line break> 是換行符號的控制字元。
 * 在您希望開始換行的部分之前或之後使用此設定。
 *
 * 請記住，自動換行主要用於訊息視窗。
 * 但是，在其他希望使用自動換行的地方，例如道具描述。
 * 請在開頭插入<WordWrap>使用該功能。
 * ============================================================================
 * 控制字元
 * ============================================================================
 * 通過在訊息中使用某些控制字元，您可以讓遊戲將其替換為以下內容：
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * 控制字元      功能
 *   \V[n]       替換為第 n 個變量的值。
 *   \N[n]       替換為第 n 個演員的名字。
 *   \P[n]       替換為第 n 個隊員的名字。
 *   \G          由金錢單位取代。
 *   \C[n]       以第 n 種顏色繪製後續文本。
 *   \I[n]       畫出第 n 個圖標。
 *   \{          將文字大小增加一單位。
 *   \}          將文字大小減少一單位。
 *   \\          替換為 \ 字符。
 *   \$          打開金錢視窗。
 *   \.          等待 1/4 秒。
 *   \|          等待 1 秒。
 *   \!          等待按鍵輸入。
 *   \>          一次顯示同一行剩餘文字。
 *   \<          取消一次顯示文字的效果。
 *   \^          顯示文字後不要等待。
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *  等待 :      效果:
 *    \w[x]     - 等待 x 幀（ 60 幀 = 1秒 ）僅限訊息視窗。
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 * 姓名視窗 :   效果:
 *    \n<x>     - 使用 x 字符串創建姓名視窗。 左邊 *注意
 *    \nc<x>    - 使用 x 字符串創建姓名視窗。 中央 *注意
 *    \nr<x>    - 使用 x 字符串創建姓名視窗。 右邊 *注意
 *
 *              *注意 : 它只能使用在訊息視窗
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *  斷行 :      效果:
 *    <br>      - 如果使用自動換行模式，這會使其換行。
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *  位置 :      效果:
 *    \px[x]    - 將文本的 x 座標設置為 x 。
 *    \py[x]    - 將文本的 y 座標設置為 x 。
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *  描邊 :     效果:
 *   \oc[x]    - 將描邊顏色設置為 x 。
 *   \ow[x]    - 將描邊寬度設置為 x 。
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *  字體 :      效果:
 *    \fr       - 重置所有字體更改。
 *    \fs[x]    - 將字體大小更改為 x 。
 *    \fn<x>    - 將字體名稱更改為 x 。
 *    \fb       - 切換字體粗體。
 *    \fi       - 切換字體斜體。
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *  角色 :      效果:
 *    \af[x]    - 顯示角色 x 的頭像。 *注意
 *    \ac[x]    - 寫出角色 x 的職業名稱。
 *    \an[x]    - 寫出角色 x 的暱稱。
 *
 *              *注意 : 它只能使用在訊息視窗
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *  隊伍 :      效果:
 *    \pf[x]    - 顯示隊員 x 的頭像。 *注意
 *    \pc[x]    - 寫出隊員 x 的職業名稱。
 *    \pn[x]    - 寫出隊員 x 的暱稱。
 *
 *              *注意 : 它只能使用在訊息視窗
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *  名稱 :      效果:
 *    \nc[x]    - 寫出職業 x 的名稱。
 *    \ni[x]    - 寫出道具 x 的名稱。
 *    \nw[x]    - 寫出武器 x 的名稱。
 *    \na[x]    - 寫出防具 x 的名稱。
 *    \ns[x]    - 寫出技能 x 的名稱。
 *    \nt[x]    - 寫出狀態 x 的名稱。
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * 圖標名稱 :   效果:
 *    \ii[x]    - 寫出道具 x 的名稱，包括圖標。
 *    \iw[x]    - 寫出武器 x 的名稱，包括圖標。
 *    \ia[x]    - 寫出防具 x 的名稱，包括圖標。
 *    \is[x]    - 寫出技能 x 的名稱，包括圖標。
 *    \it[x]    - 寫出狀態 x 的名稱，包括圖標。
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * 這些是使用此插件添加的控制字元。
 * 請記住，其中一些控制字元僅適用於訊息視窗。
 * 否則，他們將作用於幫助描述，角色傳記和其他。
 * ============================================================================
 * 插件命令
 * ============================================================================
 * 您可以通過事件編輯器使用這些命令來更改有關訊息系統的各個方面。
 * 以下是一些插件命令：
 *
 * 插件命令
 *   MessageRows 6
 *   - 將顯示的訊息行更改為 6 。
 *   如果您使用連續的顯示文本事件，這將繼續顯示以下行的文本，直到它達到行限制。
 *   之後的任何內容都會被切斷，直到下一條消息開始出現，以避免意外重疊。
 *
 *   MessageWidth 400
 *   - 將訊息視窗寬度更改為 400 。
 *   這將切斷任何顯示在太後面的詞，因此進行相應的調整！
 *
 *   EnableWordWrap
 *   - 啟用自動換行。
 *   如果詞超出視窗大小，它將自動移動到下一行。
 *   請記住，需要使用 \br 來執行換行符號。
 *
 *   DisableWordWrap
 *   - 禁用自動換行。
 *   換行符號將在編輯器中新行的位置自動換行。
 *
 *   EnableFastForward
 *   - 可以用快進鍵快進訊息。
 *
 *   DisableFastForward
 *   - 禁止用快進鍵快進訊息。
