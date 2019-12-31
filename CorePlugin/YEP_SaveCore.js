 * @plugindesc v1.06 變更存檔選單版面更加美觀，並控制檔案規則。
 * @author Yanfly Engine Plugins ( 翻譯 : ReIris )
 *
 * @param ---General---
 * @text ---一般---
 * @default
 *
 * @param Max Files
 * @text 最大檔案數
 * @parent ---General---
 * @type number
 * @min 1
 * @desc 遊戲的最大存檔數。
 * Default: 20
 * @default 24
 *
 * @param Saved Icon
 * @text 保存圖標
 * @parent ---General---
 * @type number
 * @min 0
 * @desc 用於帶有存檔的檔案位置的圖標 ID。
 * @default 231
 *
 * @param Empty Icon
 * @text 空檔圖標
 * @parent ---General---
 * @type number
 * @min 0
 * @desc 用於空存檔位置的圖標 ID。
 * @default 230
 *
 * @param Return After Saving
 * @text 保存後返回
 * @parent ---General---
 * @type boolean
 * @on YES
 * @off NO
 * @desc 保存後返回上一場景？
 * 不 - false     是 - true    預設 : 是
 * @default false
 * 
 * @param Auto New Index
 * @text 自動跳至最新
 * @parent ---General---
 * @type boolean
 * @on YES
 * @off NO
 * @desc 對於新遊戲，自動跳到最新的存檔位置？
 * 不 - false     是 - true     預設 : 是
 * @default true
 *
 * @param ---Action Window---
 * @text ---操作視窗---
 * @default
 *
 * @param Load Command
 * @text 讀取命令
 * @parent ---Action Window---
 * @desc 操作視窗中讀取命令的文字內容。
 * @default 讀取
 *
 * @param Save Command
 * @text 保存命令
 * @parent ---Action Window---
 * @desc 操作視窗中存檔命令的文字內容。
 * @default 保存
 *
 * @param Delete Command
 * @text 刪除命令
 * @parent ---Action Window---
 * @desc 操作視窗中刪除命令的文字內容。
 * @default 刪除
 *
 * @param ---Help Window---
 * @text ---幫助視窗---
 * @default
 *
 * @param Select Help
 * @text 選擇幫助說明
 * @parent ---Help Window---
 * @desc 選擇位置時顯示的幫助說明。
 * @default 請選擇檔案位置。
 *
 * @param Load Help
 * @text 讀取幫助說明
 * @parent ---Help Window---
 * @desc 選擇讀取選項時顯示的幫助說明。
 * @default 讀取這個位置的存檔。
 *
 * @param Save Help
 * @text 保存幫助說明
 * @parent ---Help Window---
 * @desc 選擇保存選項時顯示的幫助說明。
 * @default 保存目前的遊戲進度在這個位置。
 *
 * @param Delete Help
 * @text 刪除幫助說明
 * @parent ---Help Window---
 * @desc 選擇刪除選項時顯示的幫助說明。
 * @default 刪除這個位置的存檔。
 *
 * @param ---Delete---
 * @text ---刪除---
 * @default
 *
 * @param Delete Filename
 * @text 刪除音效名稱
 * @parent ---Delete---
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc 用於從 /audio/se/ 資料夾中刪除存檔時的音效。
 * 不需要副檔名。
 * @default Damage2
 *
 * @param Delete Volume
 * @text 刪除音效音量
 * @parent ---Delete---
 * @desc 用於刪除音效的音量。
 * @default 100
 *
 * @param Delete Pitch
 * @text 刪除音效音調
 * @parent ---Delete---
 * @desc 用於刪除音效的音調。
 * @default 150
 *
 * @param Delete Pan
 * @text 刪除音效聲道
 * @parent ---Delete---
 * @desc 用於刪除音效的左右聲道。
 * @default 0
 *
 * @param ---Info Window---
 * @text ---資訊視窗---
 * @default
 *
 * @param Show Game Title
 * @text 顯示遊戲標題
 * @parent ---Info Window---
 * @type boolean
 * @on 顯示
 * @off 隱藏
 * @desc 在存檔中顯示遊戲標題？
 * 不 - false   是 - true
 * @default true
 *
 * @param Invalid Game Text
 * @text 無效文字
 * @parent ---Info Window---
 * @desc 用來提示該存檔使用於不同遊戲的文字。
 * @default 此存檔用於其他遊戲。
 *
 * @param Empty Game Text
 * @text 空白檔案文字
 * @parent ---Info Window---
 * @desc 用來提示空白檔案的文字。
 * @default 尚未保存
 *
 * @param Map Display Name
 * @text 地圖名稱顯示
 * @parent ---Info Window---
 * @type boolean
 * @on 顯示
 * @off 隱藏
 * @desc 使用已保存地圖的顯示名稱？
 * 不 - false   是 - true
 * @default true
 *
 * @param Party Display
 * @text 顯示隊伍
 * @parent ---Info Window---
 * @type select
 * @option 不顯示
 * @value 0
 * @option 行走圖
 * @value 1
 * @option 頭像
 * @value 2
 * @option SV 參戰角色
 * @value 3
 * @desc 隊伍使用的顯示類型。
 * 0 - 不顯示 / 1 - 行走圖 / 2 - 頭像 / 3 - SV 參戰角色
 * @default 2
 *
 * @param Party Y Position
 * @text 隊伍 Y 位置
 * @parent ---Info Window---
 * @desc 這是隊伍顯示的基本 Y 位置。
 * 可以使用公式。
 * @default this.lineHeight() + Window_Base._faceHeight
 *
 * @param Show Actor Names
 * @text 顯示角色名稱
 * @parent ---Info Window---
 * @type boolean
 * @on Show
 * @off Hide
 * @desc 顯示角色名稱？
 * 不 - false   是 - true
 * @default true
 *
 * @param Name Font Size
 * @text 名稱字體大小
 * @parent ---Info Window---
 * @type number
 * @min 1
 * @desc 如果顯示名稱，則用於名稱的字體大小。
 * 預設 : 28
 * @default 20
 *
 * @param Show Actor Level
 * @text 顯示角色等級
 * @parent ---Info Window---
 * @type boolean
 * @on 顯示
 * @off 隱藏
 * @desc 顯示角色的等級？
 * 不 - false   是 - true
 * @default true
 *
 * @param Level Font Size
 * @text 等級字體大小
 * @parent ---Info Window---
 * @type number
 * @min 1
 * @desc 如果顯示等級，則用於等級的字體大小。
 * 預設 : 28
 * @default 20
 *
 * @param Level Format
 * @text 等級格式
 * @parent ---Info Window---
 * @desc 用於顯示等級的文字格式。
 * %1 - Lv (縮寫)  %2 - Lv (滿級)  %3 - Value
 * @default \c[16]%1 \c[0]%3
 *
 * @param Data Font Size
 * @text 資料字體大小
 * @parent ---Info Window---
 * @type number
 * @min 1
 * @desc 顯示資料的文字大小。
 * 預設 : 28
 * @default 20
 *
 * @param Data Column 1
 * @text 資料列 1
 * @parent ---Info Window---
 * @desc 資料列 1 中顯示的資料。
 * 有關資料輸入，請閱讀幫助文件。用逗號(,)將每個項目分開。
 * @default empty, playtime, save count, gold count
 *
 * @param Data Column 2
 * @text 資料列 2
 * @parent ---Info Window---
 * @desc 資料列 2 中顯示的資料。
 * 有關資料輸入，請閱讀幫助文件。用逗號(,)將每個項目分開。
 * @default location, variable 1, variable 2, variable 3
 *
 * @param Data Column 3
 * @text 資料列 3
 * @parent ---Info Window---
 * @desc 資料列 3 中顯示的資料。
 * 有關資料輸入，請閱讀幫助文件。用逗號(,)將每個項目分開。
 * @default empty, variable 4, variable 5, variable 6
 *
 * @param Data Column 4
 * @text 資料列 4
 * @parent ---Info Window---
 * @desc 資料列 4 中顯示的資料。
 * 有關資料輸入，請閱讀幫助文件。用逗號(,)將每個項目分開。
 * @default
 *
 * @param ---Vocabulary---
 * @text ---用語---
 * @default
 *
 * @param Map Location
 * @text 地圖位置
 * @parent ---Vocabulary---
 * @desc 用於分類「地圖位置」的文字。
 * 留白以不使用此類別並使資料居中。
 * @default
 *
 * @param Playtime
 * @text 遊玩時間
 * @parent ---Vocabulary---
 * @desc 用於「遊玩時間」類別的文字。
 * 留白以不使用此類別並使資料居中。
 * @default 遊玩時間 :
 *
 * @param Save Count
 * @text 存檔次數
 * @parent ---Vocabulary---
 * @desc 用於「存檔次數」類別的文字。
 * 留白以不使用此類別並使資料居中。
 * @default 總共存檔次數 :
 *
 * @param Gold Count
 * @text 金錢
 * @parent ---Vocabulary---
 * @desc 用於「金錢」類別的文字。
 * 留白以不使用此類別並使資料居中。
 * @default %1 :
 *
 * @param ---Technical---
 * @text ---技術---
 * @default
 *
 * @param Save Mode
 * @text 存檔模式
 * @parent ---Technical---
 * @type combo
 * @option local
 * @option web
 * @option auto
 * @desc 在遊戲中要使用何種存檔模式運作 :
 * local(本地)    web(網頁)   auto(自動)
 * @default auto
 *
 * @param Local Config
 * @text 本地系統設置存檔
 * @parent ---Technical---
 * @desc 使用本地存檔時系統設置的檔案名。
 * 預設 : config.rpgsave
 * @default config.rpgsave
 *
 * @param Local Global
 * @text 本地全域存檔
 * @parent ---Technical---
 * @desc 使用本地存檔時全域檔案名。
 * 預設 : global.rpgsave
 * @default global.rpgsave
 *
 * @param Local Save
 * @text 本地保存存檔
 * @parent ---Technical---
 * @desc 使用本地保存存檔時的遊戲保存檔案名稱。
 * %1 - 檔案順序 預設 : file
 * @default file%1.rpgsave
 *
 * @param Web Config
 * @text 網頁系統設置存檔
 * @parent ---Technical---
 * @desc 使用網頁存檔時的遊戲系統設置檔案名稱。
 * %1 - 遊戲名稱 預設 : RPG Config
 * @default RPG %1 Config
 *
 * @param Web Global
 * @text 網頁全域存檔
 * @parent ---Technical---
 * @desc 使用網頁存檔時的遊戲全域存檔檔案名稱。
 * %1 - 遊戲名稱 預設 : RPG global
 * @default RPG %1 global
 *
 * @param Web Save
 * @text 網頁保存存檔
 * @parent ---Technical---
 * @desc 使用網頁存檔時的遊戲存檔檔案名稱。
 * %1 - 遊戲名稱 %2 - 檔案順序 預設 : RPG file%1
 * @default RPG %1 file%2
 *
 * @param ---Confirmation---
 * @text ---確認---
 * @default
 *
 * @param Load Confirmation
 * @text 讀取確認視窗
 * @parent ---Confirmation---
 * @type boolean
 * @on 顯示
 * @off 不顯示
 * @desc 讀取存檔時顯示讀取確認視窗？
*  不顯示 - false   顯示 - true
 * @default true
 *
 * @param Load Text
 * @text 讀取文字
 * @parent ---Confirmation---
 * @desc 讀取存檔時顯示的文字。
 * @default 確定要讀取這個存檔嗎？
 *
 * @param Save Confirmation
 * @text 存檔確認視窗
 * @parent ---Confirmation---
 * @type boolean
 * @on 顯示
 * @off 不顯示
 * @desc 覆蓋存檔時顯示存檔確認視窗？
 * 不顯示 - false   顯示 - true
 * @default true
 *
 * @param Save Text
 * @text 覆蓋存檔文字
 * @parent ---Confirmation---
 * @desc 當覆蓋存檔時顯示的提示文字。
 * @default 確定要覆蓋這個存檔嗎？
 *
 * @param Delete Confirmation
 * @text 刪除確認視窗
 * @parent ---Confirmation---
 * @type boolean
 * @on 顯示
 * @off 不顯示
 * @desc 刪除存檔時顯示刪除確認視窗？
 * 不顯示 - false   顯示 - true
 * @default true
 *
 * @param Delete Text
 * @text 刪除文字
 * @parent ---Confirmation---
 * @desc 當刪除存檔時顯示的提示文字。
 * @default 確定要刪除這個存檔嗎？
 *
 * @param Confirm Yes
 * @text 確定文字
 * @parent ---Confirmation---
 * @desc 確認覆蓋命令「確定」的文字內容。
 * @default 確定
 *
 * @param Confirm No
 * @text 取消文字
 * @parent ---Confirmation---
 * @desc 確認覆蓋命令「取消」的文字內容。
 * @default 取消
 *
 * @help
 * ============================================================================
 * 介紹
 * ============================================================================
 *
 * 該插件為玩家提供了一個新的存檔畫面。
 * 除了新畫面外，玩家還可以直接從選單本身讀取和刪除存檔。
 * 反過來，這將使「主選單」中的存檔命令始終可用，但是新的存檔選單中的存檔選項
 * 將被啟用，具體取決於是否允許或禁止它。
 * 透過畫面可以為玩家提供有關存檔的更多訊息，包括玩家保存的位置，可用的金錢以
 * 及您想向玩家顯示的任何變數。
 *
 * ============================================================================
 * 說明 - 資料列
 * ============================================================================
 *
 * 對於希望在每個存檔的存檔畫面中顯示其他資料的使用者，可以在插件參數的
 * 「資料列」中添加各種資料類別。
 * 用逗號(,)分隔每個類別。
 * 您可以將以下項目用於資料類別：
 *
 * 資料列類別：
 *
 *   Empty
 *   - 在類別位置保留為空。甚至不會在資料列中顯示黑色背景。
 *
 *   Null
 *   - 不會顯示任何文本，但會在資料列中繪製黑色背景。
 *
 *   Location
 *   - 顯示存檔時的當前地圖位置。
 *
 *   Playtime
 *   - 顯示用於存檔的已遊玩時間。
 *
 *   Save Count
 *   - 顯示該玩家保存的次數。
 *
 *   Gold Count
 *   - 顯示存檔的當前金錢數。
 *
 *   Variable x
 *   - 顯示變數的名稱和變數的值。
 *   可以在變數名稱中使用控制字元。
 *   顯示時 << 和 >> 之間的任何文字都不會顯示。
 *   如果變數名稱為空，則該值將居中。
 *
 *   text: stuff
 *   left text: stuff
 *   center text: stuff
 *   right text: stuff
 *   - 這會將「內容」（用文本替換）顯示為本身沒有文字的文本。
 *   使用「左」（left），「中心」（center）或「右」（right）確定文本對齊方式。
 *   如果不使用對齊方式，則默認為「左對齊」。
 *   可以在顯示的文字中使用控制字元。
 *
 * ============================================================================
 * 技術 - 存檔模式
 * ============================================================================
 *
 * 對於有計畫要在網路上發佈 RPG Maker MV 遊戲的開發人員，您可能需要研究「技術」
 * 部分的參數。在這裡，您可以強制讓遊戲認為正在「本地」或「網頁」模式下運行。
 * 預設情況下，您希望設定為「自動」，但是強制模式僅用於測試。
 * 即使出於測試目的，但如果您希望您的遊戲按照「網頁」模式調整存檔，則即使您的遊
 * 戲僅限本地使用，也可以保持這種方式。
 * 但是，網頁上的遊戲無法使用「本地」模式，而是會自動默認為「網頁」模式。
 *
 * ============================================================================
 * 技術 - 存檔檔案
 * ============================================================================
 *
 * 「本地系統設置」，「本地全域」和「本地保存」可以根據喜好更改檔案名稱格式。
 * 但就個人而言，除非您知道自己在做什麼，否則我不建議您將其弄亂。
 *
 * ---
 *
 * 但是，如果您要製作基於網頁的平台（包括移動平台）。
 * 強烈建議您查看「網頁系統設置」，「網頁全域」和「網頁保存」參數。
 * 預設情況下，RPG Maker MV 將所有保存預設設定為 RPG FileX 。
 * 然後，所有基於網頁的 RPG Maker MV 遊戲將使用相同的設定，相同的全域存檔，
 * 並且一個人玩的所有 RPG Maker MV 遊戲將共享同樣的存檔位置。
 * 這可能是非常大的問題。
 *
 * 該插件的預設設定將解決此共享同樣位置問題，方法是將網頁存檔命名為您的遊戲
 * 名稱，前提是您保持當前插件設定不變或對其進行相應調整。
 * 現在，您的遊戲將擁有自己的獨立識別，使用自己的系統設置，全域存檔與存檔檔案
 * ，而不會與玩家可能玩過的任何其他 RPG Maker MV 遊戲衝突。
 *
