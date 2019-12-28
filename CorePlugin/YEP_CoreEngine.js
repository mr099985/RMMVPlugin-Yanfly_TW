 * @plugindesc v1.31 大多數 Yanfly 插件需要此插件核心。
 * 還包含 RPG Maker MV 中固有的錯誤修復。
 * @author Yanfly Engine Plugins ( 翻譯 : ReIris )
 *
 * @param ---Screen---
 * @text ---畫面---
 * @default
 *
 * @param Screen Width
 * @text 畫面寬度
 * @parent ---Screen---
 * @type number
 * @min 0
 * @desc 調整畫面寬度。
 * 預設值 : 816
 * @default 816
 *
 * @param Screen Height
 * @text 畫面高度
 * @parent ---Screen---
 * @type number
 * @min 0
 * @desc 調整畫面高度。
 * 預設值 : 624
 * @default 624
 *
 * @param Scale Battlebacks
 * @text 戰鬥背景縮放
 * @parent ---Screen---
 * @type boolean
 * @on 是
 * @off 否
 * @desc 是否縮放戰鬥背景以符合畫面大小。
 * 否 - false     是 - true
 * @default true
 *
 * @param Scale Title
 * @text 縮放標題畫面
 * @parent ---Screen---
 * @type boolean
 * @on 是
 * @off 否
 * @desc 是否縮放標題畫面以符合畫面大小。
 * 否 - false     是 - true
 * @default true
 *
 * @param Scale Game Over
 * @text 縮放遊戲結束畫面
 * @parent ---Screen---
 * @type boolean
 * @on 是
 * @off 否
 * @desc 是否縮放遊戲結束畫面以符合畫面大小。
 * 否 - false     是 - true
 * @default true
 *
 * @param Open Console
 * @text 打開控制台
 * @parent ---Screen---
 * @type boolean
 * @on 打開
 * @off 不開
 * @desc 為了測試和調整，打開控制台。
 * 不開 - false     打開 - true
 * @default false
 *
 * @param Reposition Battlers
 * @text 重新定位戰鬥角色
 * @parent ---Screen---
 * @type boolean
 * @on 是
 * @off 否
 * @desc 是否允許該插件重新定位戰鬥角色。
 * 否 - false     是 - true
 * @default true
 *
 * @param GameFont Load Timer
 * @text 遊戲字體讀取時間
 * @parent ---Screen---
 * @type number
 * @min 0
 * @desc 設定讀取 GameFont 的時間。
 * 0 為無限時間設置。預設值：20000
 * @default 0
 *
 * @param Update Real Scale
 * @text 更新實際縮放
 * @parent ---Screen---
 * @type boolean
 * @on 是
 * @off 否
 * @desc 目前最好單獨使用，但它可以實現畫面拉伸的真正縮放。
 *  否 - false   是 - true
 * @default false
 *
 * @param Collection Clear
 * @text 暫存清除
 * @parent ---Screen---
 * @type boolean
 * @on 是
 * @off 否
 * @desc 切換場景時清除主要畫面中儲存的對象以釋放快取。
 * 否 - false   是 - true
 * @default true
 *
 * @param ---Gold---
 * @text ---金錢---
 * @desc
 *
 * @param Gold Max
 * @text 最大金錢數
 * @parent ---Gold---
 * @type number
 * @min 1
 * @desc 玩家可以持有的最大金錢數量。
 * Default: 99999999
 * @default 99999999
 *
 * @param Gold Font Size
 * @text 金錢字體大小
 * @parent ---Gold---
 * @type number
 * @min 1
 * @desc 用於顯示金錢的字體大小。
 * Default: 28
 * @default 20
 *
 * @param Gold Icon
 * @text 金錢圖標
 * @parent ---Gold---
 * @type number
 * @min 0
 * @desc 用於在金錢視窗中表示金錢的圖標。
 * 如果為 0 ，則不顯示圖標。
 * @default 313
 *
 * @param Gold Overlap
 * @text 金錢數字重疊視窗
 * @parent ---Gold---
 * @desc 當金錢超過視窗的內容大小時顯示的內容。
 * @default A lotta
 *
 * @param ---Items---
 * @text ---道具---
 * @desc
 *
 * @param Default Max
 * @text 預設最大值
 * @parent ---Items---
 * @type number
 * @min 1
 * @desc 玩家預設可以持有的道具最大數量。
 * Default: 99
 * @default 99
 *
 * @param Quantity Text Size
 * @text 道具數量字體大小
 * @parent ---Items---
 * @type number
 * @min 1
 * @desc 這是用於道具數量的字體大小。
 * Default: 28
 * @default 20
 *
 * @param ---Parameters---
 * @text ---參數---
 * @default
 *
 * @param Max Level
 * @text 最大等級
 * @parent ---Parameters---
 * @type number
 * @min 1
 * @desc 調整角色的最高等級限制。
 * Default: 99
 * @default 99
 *
 * @param Actor MaxHP
 * @text 角色最大HP
 * @parent ---Parameters---
 * @type number
 * @min 1
 * @desc 調整角色的最大 HP 限制。
 * Default: 9999
 * @default 9999
 *
 * @param Actor MaxMP
 * @text 角色最大MP
 * @parent ---Parameters---
 * @type number
 * @min 0
 * @desc 調整角色的最大 MP 限制。
 * Default: 9999
 * @default 9999
 *
 * @param Actor Parameter
 * @text 角色最大參數值
 * @parent ---Parameters---
 * @type number
 * @min 1
 * @desc 調整角色的最大參數限制。
 * Default: 999
 * @default 999
 *
 * @param Enemy MaxHP
 * @text 敵人最大HP
 * @parent ---Parameters---
 * @type number
 * @min 1
 * @desc 調整敵人的最大 HP 限制。
 * Default: 999999
 * @default 999999
 *
 * @param Enemy MaxMP
 * @text 敵人最大MP
 * @parent ---Parameters---
 * @type number
 * @min 0
 * @desc 調整敵人的最大 MP 限制。
 * Default: 9999
 * @default 9999
 *
 * @param Enemy Parameter
 * @text 敵人最大參數值
 * @parent ---Parameters---
 * @type number
 * @min 1
 * @desc 調整敵人的最大參數限制。
 * Default: 999
 * @default 999
 *
 * @param ---Battle---
 * @text ---戰鬥---
 * @desc
 *
 * @param Animation Rate
 * @text 動畫速率
 * @parent ---Battle---
 * @type number
 * @min 1
 * @desc 調整戰鬥動畫的速度。數字小速度更快。
 * Default: 4
 * @default 4
 *
 * @param Flash Target
 * @text 選擇目標閃爍
 * @parent ---Battle---
 * @type boolean
 * @on 是
 * @off 否
 * @desc 如果敵人是當前目標，它會高亮閃爍。
 * 否 - false     是 - true
 * @default false
 *
 * @param Show Events Transition
 * @text 顯示戰鬥開場變化
 * @parent ---Battle---
 * @type boolean
 * @on 顯示
 * @off 隱藏
 * @desc 事件是否顯示戰鬥開場變化？
 * 顯示 - true   隱藏 - false   預設值 : false
 * @default true
 *
 * @param Show Events Snapshot
 * @text 顯示地圖戰鬥背景
 * @parent ---Battle---
 * @type boolean
 * @on 顯示
 * @off 隱藏
 * @desc 事件是否顯示地圖戰鬥背景？
 * 顯示 - true   隱藏 - false   預設值 : false
 * @default true
 *
 * @param ---Map Optimization---
 * @text ---地圖優化---
 * @desc
 *
 * @param Refresh Update HP
 * @text 刷新更新的 HP
 * @parent ---Map Optimization---
 * @type boolean
 * @on 顯示
 * @off 隱藏
 * @desc 在地圖上更新 HP 時，是否刷新完整角色？
 * 顯示 - true    隱藏 - false    預設值 : true
 * @default true
 *
 * @param Refresh Update MP
 * @text 刷新更新的 MP
 * @parent ---Map Optimization---
 * @type boolean
 * @on 顯示
 * @off 隱藏
 * @desc 在地圖上更新 MP 時，是否刷新完整角色？
 * 顯示 - true    隱藏 - false    預設值 : true
 * @default true
 *
 * @param Refresh Update TP
 * @text 刷新更新的 TP
 * @parent ---Map Optimization---
 * @type boolean
 * @on 顯示
 * @off 隱藏
 * @desc 在地圖上更新 TP 時，是否刷新完整角色？
 * 顯示 - true    隱藏 - false    預設值 : true
 * @default false
 *
 * @param ---Font---
 * @text ---字體---
 * @desc
 *
 * @param Chinese Font
 * @text 中文字體
 * @parent ---Font---
 * @desc 預設用於中文的字體。
 * Default: SimHei, Heiti TC, sans-serif
 * @default SimHei, Heiti TC, sans-serif
 *
 * @param Korean Font
 * @text 韓國字體
 * @parent ---Font---
 * @desc 預設用於韓文的字體。
 * Default: Dotum, AppleGothic, sans-serif
 * @default Dotum, AppleGothic, sans-serif
 *
 * @param Default Font
 * @text 預設字體
 * @parent ---Font---
 * @desc 預設用於任何語言的字體。
 * Default: GameFont
 * @default GameFont, Verdana, Arial, Courier New
 *
 * @param Font Size
 * @text 字體大小
 * @parent ---Font---
 * @type number
 * @min 1
 * @desc 用於視窗的預設字體大小。
 * Default: 28
 * @default 28
 *
 * @param Text Align
 * @text 文字對齊
 * @parent ---Font---
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc 在命令視窗中文字對齊的方式。
 * 左 / left    中央 / center    右 / right
 * @default left
 *
 * @param ---Windows---
 * @text ---視窗---
 * @default
 *
 * @param Digit Grouping
 * @text 數字分組
 * @parent ---Windows---
 * @type boolean
 * @on 是
 * @off 否
 * @desc 使用逗號將數字組合在一起。
 * 否 - OFF     是 - ON
 * @default true
 *
 * @param Line Height
 * @text 行高
 * @parent ---Windows---
 * @type number
 * @min 0
 * @desc 調整視窗內的文字行高。
 * Default: 36
 * @default 36
 *
 * @param Icon Width
 * @text 圖標寬度
 * @parent ---Windows---
 * @type number
 * @min 0
 * @desc 調整圖標的寬度。
 * Default: 32
 * @default 32
 *
 * @param Icon Height
 * @text 圖標高度
 * @parent ---Windows---
 * @type number
 * @min 0
 * @desc 調整圖標的高度。
 * Default: 32
 * @default 32
 *
 * @param Face Width
 * @text 頭像寬度
 * @parent ---Windows---
 * @type number
 * @min 0
 * @desc 調整角色頭像的寬度。
 * Default: 144
 * @default 144
 *
 * @param Face Height
 * @text 頭像高度
 * @parent ---Windows---
 * @type number
 * @min 0
 * @desc 調整角色頭像的高度。
 * Default: 144
 * @default 144
 *
 * @param Window Padding
 * @text 視窗留白
 * @parent ---Windows---
 * @type number
 * @min 0
 * @desc 調整所有標準視窗的留白。
 * Default: 18
 * @default 18
 *
 * @param Text Padding
 * @text 文字留白
 * @parent ---Windows---
 * @type number
 * @min 0
 * @desc 調整視窗內文字的留白。
 * Default: 6
 * @default 6
 *
 * @param Window Opacity
 * @text 視窗透明度
 * @parent ---Windows---
 * @type number
 * @min 0
 * @desc 調整視窗的不透明度。
 * Default: 192
 * @default 192
 *
 * @param Gauge Outline
 * @text 計量條是否描邊
 * @parent ---Windows---
 * @type boolean
 * @on 是
 * @off 否
 * @desc 量條是否要描邊。
 * 否 - OFF     是 - ON
 * @default true
 *
 * @param Gauge Height
 * @text 計量條高度
 * @parent ---Windows---
 * @type number
 * @min 0
 * @desc 設定量條的高度。
 * 例如 : HP條 / MP條 / TP條 ...等等
 * Default: 6
 * @default 18
 *
 * @param Menu TP Bar
 * @text 選單 TP 條
 * @parent ---Windows---
 * @type boolean
 * @on 是
 * @off 否
 * @desc 在選單的角色狀態中描繪 TP 量條。
 * false - 否     true - 是
 * @default true
 *
 * @param ---Window Colors---
 * @text ---視窗顏色---
 * @default
 *
 * @param Color: Normal
 * @text 顏色 : 一般
 * @parent ---Window Colors---
 * @type number
 * @min 0
 * @max 31
 * @desc 更改視窗的文字顏色。
 * Default: 0
 * @default 0
 *
 * @param Color: System
 * @text 顏色 : 系統
 * @parent ---Window Colors---
 * @type number
 * @min 0
 * @max 31
 * @desc 更改視窗的文字顏色。
 * Default: 16
 * @default 16
 *
 * @param Color: Crisis
 * @text 顏色 : 危機
 * @parent ---Window Colors---
 * @type number
 * @min 0
 * @max 31
 * @desc 更改視窗的文字顏色。
 * Default: 17
 * @default 17
 *
 * @param Color: Death
 * @text 顏色 : 死亡
 * @parent ---Window Colors---
 * @type number
 * @min 0
 * @max 31
 * @desc 更改視窗的文字顏色。
 * Default: 18
 * @default 18
 *
 * @param Color: Gauge Back
 * @text 顏色 : 量條背景
 * @parent ---Window Colors---
 * @type number
 * @min 0
 * @max 31
 * @desc 更改視窗的文字顏色。
 * Default: 19
 * @default 19
 *
 * @param Color: HP Gauge 1
 * @text 顏色 : HP 量條 1
 * @parent ---Window Colors---
 * @type number
 * @min 0
 * @max 31
 * @desc 更改視窗的文字顏色。
 * Default: 20
 * @default 20
 *
 * @param Color: HP Gauge 2
 * @text 顏色 : HP 量條 2
 * @parent ---Window Colors---
 * @type number
 * @min 0
 * @max 31
 * @desc 更改視窗的文字顏色。
 * Default: 21
 * @default 21
 *
 * @param Color: MP Gauge 1
 * @text 顏色 : MP 量條 1
 * @parent ---Window Colors---
 * @type number
 * @min 0
 * @max 31
 * @desc 更改視窗的文字顏色。
 * Default: 22
 * @default 22
 *
 * @param Color: MP Gauge 2
 * @text 顏色 : MP 量條 2
 * @parent ---Window Colors---
 * @type number
 * @min 0
 * @max 31
 * @desc 更改視窗的文字顏色。
 * Default: 23
 * @default 23
 *
 * @param Color: MP Cost
 * @text 顏色 : MP 消耗
 * @parent ---Window Colors---
 * @type number
 * @min 0
 * @max 31
 * @desc 更改視窗的文字顏色。
 * Default: 23
 * @default 23
 *
 * @param Color: Power Up
 * @text 顏色 : 提升
 * @parent ---Window Colors---
 * @type number
 * @min 0
 * @max 31
 * @desc 更改視窗的文字顏色。
 * Default: 24
 * @default 24
 *
 * @param Color: Power Down
 * @text 顏色 : 降低
 * @parent ---Window Colors---
 * @type number
 * @min 0
 * @max 31
 * @desc 更改視窗的文字顏色。
 * Default: 25
 * @default 25
 *
 * @param Color: TP Gauge 1
 * @text 顏色 : TP 量條 1
 * @parent ---Window Colors---
 * @type number
 * @min 0
 * @max 31
 * @desc 更改視窗的文字顏色。
 * Default: 28
 * @default 28
 *
 * @param Color: TP Gauge 2
 * @text 顏色 : TP 量條 2
 * @parent ---Window Colors---
 * @type number
 * @min 0
 * @max 31
 * @desc 更改視窗的文字顏色。
 * Default: 29
 * @default 29
 *
 * @param Color: TP Cost Color
 * @text 顏色 : TP 消耗
 * @parent ---Window Colors---
 * @type number
 * @min 0
 * @max 31
 * @desc 更改視窗的文字顏色。
 * Default: 29
 * @default 29
 *
 * @help
 * ============================================================================
 * 介紹和說明
 * ============================================================================
 * Yanfly 引擎插件 - 核心引擎是為 RPG Maker MV 製作的。此插件主要用於修復錯誤，
 * 並讓作者更方便控制 RPGMaker MV 的各種功能，例如畫面尺寸，字體，視窗樣式顏色。
 *
 * 只需要將它放在所有其他 Yanfly 插件之上。
 * 根據需求可以調整任何插件參數。
 * ============================================================================
 * 修復錯誤
 * ============================================================================
 * 這個插件修復了 RPGMaker MV 中存在的一些錯誤。
 * 其中有以下內容：
 *
 * 動畫疊加
 *   當使用全畫面動畫同時瞄準多個敵人的技能、道具時，它會多次疊加，導致動畫被
 *   一系列疊加效果扭曲。
 *   該插件通過只在其中播放一個動畫而不是每個動畫來修復此問題。
 *
 * 音量疊加
 *   有時，會再具有設定的同一幀中播放多個音效（通常用於動畫效果），音量會相互
 *   疊加，導致無法預期音效的音量大小。
 *   此插件通過防止相同設定的聲音效果在同一幀中播放來修復此問題，僅允許第一個
 *   播放而不讓音量疊加更多音效。
 *
 * 事件移動速度
 *   由於程式碼中的一個小錯誤，事件的移動速度比它們應該稍微慢一些。
 *   該插件修復了這個問題，並以適當的速度移動。
 *
 * 事件移動隊列
 *   如果事件要透過事件命令移動，則將事件設定更改為其他頁面的條件將導致該事件
 *   的移動路線停止在其路線中。
 *   插件修復了這個問題，將會完成事件的移動路線。
 *
 * 事件碰撞
 *   使用「低於人物」設置，事件無法移動到其他事件上。
 *   這使得某些類型的謎題或事件難以存在。
 *   此插件通過使衝突檢查僅適用於「與人物相同」優先級的事件來解決此問題。
 *   任何高於或低於角色的事件都不會再與其他事件發生碰撞。
 *
 * 畫面拉扯
 *   當緩慢移動時，畫面上的圖塊會拉扯。雖然它在所有系統上都不明顯，但速度較
 *   慢的電腦肯定會顯示出來。
 *   該插件將解決此問題並同步圖塊，以跟上畫面的相機移動速度。
 *
 * 圖片失真
 *   由於 JavaScript 奇怪的數學行為，有時帶小數位的值會導致貼圖集最終看起來
 *   失真。
 *   該插件將去掉小數位並讓精靈表僅通過使用整數值正確取出幀。
 *
 * ============================================================================
 * 金錢
 * ============================================================================
 * 您可以使用插件命令添加或刪除超過編輯器 9,999,999 限制的金錢。
 * 也可以改變道具、武器跟防具的 999,999 限制。
 *
 * 插件命令 : 
 *   GainGold 1234567890       # 隊伍獲得 1234567890 金錢
 *   LoseGold 9876543210       # 隊伍失去 9876543210 金錢
 *
 * 道具、武器、防具注釋
 *   <Price: x>
 *   將道具的價格更改為 x 。
 *   注釋允許超過編輯器的 999,999 金錢限制。
 *
 * 敵人注釋
 *   <Gold: x>
 *   更改敵人掉落的金錢為 x 。
 *   注釋允許超過編輯器的 999,999 金錢限制。
 *
 * ============================================================================
 * 道具
 * ============================================================================
 * 更改參數以反應玩家每個道具可以容納的最大道具數量。
 * 如果希望使單個道具具有不同的最大值，請使用以下註釋：
 *
 * 道具、武器、防具注釋
 *   <Max Item: x>
 *   這會將道具的最大數量更改為 x 。
 *
 * ============================================================================
 * 統計
 * ============================================================================
 * 即使提高了參數限制，編輯器仍然僅限於RPG Maker MV的預設限制。
 * 要突破它們，請使用以下註釋以允許進一步控制參數的各個方面。
 *
 * 角色注釋
 *   <Initial Level: x>
 *   更改角色的初始等級為 x 。
 *   這允許超過編輯器的等級 99 限制。
 *
 *   <Max Level: x>
 *   更改角色的最大等級為 x 。
 *   這允許超過編輯器的等級 99 限制。
 *
 * 職業技能學習注釋
 *   <Learn at Level: x>
 *   當放在職業的「技能學習」注釋中時，這將使職業學習 x 級的技能。
 *
 * 武器、防具注釋
 *   <stat: +x>
 *   <stat: -x>
 *   允許這件武器或防具獲得或減少 x 的屬性。
 *   將 stat 替換為 HP 、 MP 、 atk 、 def 、 mat 、 mdf 、 agi 或 luk 以
 *   更改該特定屬性。
 *   這允許裝備超過編輯器的預設限制，只要最大值允許。
 *
 * 敵人注釋
 *   <stat: x>
 *   變更敵人的 x 屬性。
 *   將 stat 替換為 HP 、 MP 、 atk 、 def 、 mat 、 mdf 、 agi 或 luk 以
 *   更改該特定屬性。
 *   這允許裝備超過編輯器的預設限制，只要最大值允許。
 *
 *   <exp: x>
 *   變更打倒敵人時給予的經驗值為 x 。
 *   這允許敵人提供比編輯器預設的 9,999,999 限制更多的經驗值。
 *
 * ============================================================================
 * 腳本失敗安全措施
 * ============================================================================
 *
 * 傷害公式，使用腳本，條件分岐和變數事件中的不規則代碼將不會再使遊戲崩潰。
 * 相反，他們將強制打開控制台視窗，僅在測試遊玩期間顯示錯誤。
 *
 * 如果玩家不是測試遊戲，遊戲將繼續正常運行而不會顯示錯誤。
 * 如果正在網頁中遊玩遊戲，則打開控制台視窗仍將顯示錯誤。
 *
