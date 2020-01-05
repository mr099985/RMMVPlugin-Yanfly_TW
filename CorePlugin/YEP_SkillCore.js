 * @plugindesc v1.13 讓技能有更多的功能以及可以顯示不同的技能消耗。
 * @author Yanfly Engine Plugins ( 翻譯 : ReIris )
 *
 * @param ---General---
 * @text ---一般---
 * @default
 *
 * @param Cost Padding
 * @text 消耗文字間隔
 * @parent ---General---
 * @type number
 * @min 0
 * @desc 如果一個技能有多個消耗，
 * 則這是在消耗間作為留白的間隔 ( px )。
 * @default 4
 *
 * @param Command Alignment
 * @text 命令對齊方式
 * @parent ---General---
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc 調整技能類型視窗的文字對齊方式
 * 左 / left    中央 / center    右 / right
 * @default center
 *
 * @param Window Columns
 * @text 視窗列數
 * @parent ---General---
 * @type number
 * @min 1
 * @desc 設定在技能視窗要顯示多少列。
 * 預設 : 2
 * @default 2
 *
 * @param ---HP Costs---
 * @default
 *
 * @param HP Format
 * @text HP 顯示格式
 * @parent ---HP Costs---
 * @desc 調整在技能列表視窗要如何顯示 HP 消耗。
 * %1 - 消耗     %2 - HP
 * @default %1%2
 *
 * @param HP Font Size
 * @text HP 字體大小
 * @parent ---HP Costs---
 * @type number
 * @min 1
 * @desc 調整顯示 HP 的字體大小。
 * 預設 : 28
 * @default 20
 *
 * @param HP Text Color
 * @text HP 文字顏色
 * @parent ---HP Costs---
 * @type number
 * @min 0
 * @max 31
 * @desc 調整 HP 的文字顏色 ( 使用視窗樣式顏色指定 )。
 * 預設 : 21
 * @default 18
 *
 * @param HP Icon
 * @text HP 圖標
 * @parent ---HP Costs---
 * @type number
 * @min 0
 * @desc 設定使用幾號圖標表示 HP 消耗。
 * 如果想要不使用圖標保持為 0 即可。
 * @default 162
 *
 * @param ---MP Costs---
 * @text ---MP 消耗---
 * @default
 *
 * @param MP Format
 * @text MP 顯示格式
 * @parent ---MP Costs---
 * @desc 調整在技能列表視窗要如何顯示 MP 消耗。
 * %1 - 消耗     %2 - MP
 * @default %1%2
 *
 * @param MP Font Size
 * @text MP 字體大小
 * @parent ---MP Costs---
 * @type number
 * @min 1
 * @desc 調整顯示 MP 的顯示字體大小。
 * 預設 : 28
 * @default 20
 *
 * @param MP Text Color
 * @text MP 文字顏色
 * @parent ---MP Costs---
 * @type number
 * @min 0
 * @max 31
 * @desc 調整 MP 的文字顏色 ( 使用視窗樣式顏色指定 )。
 * 預設 : 23
 * @default 23
 *
 * @param MP Icon
 * @text MP 圖標
 * @parent ---MP Costs---
 * @type number
 * @min 0
 * @desc 設定使用幾號圖標表示 MP 消耗。
 * 如果想要不使用圖標保持為 0 即可。
 * @default 165
 *
 * @param ---TP Costs---
 * @text ---TP 消耗---
 * @default
 *
 * @param TP Format
 * @text TP 顯示格式
 * @parent ---TP Costs---
 * @desc 調整在技能列表視窗要如何顯示 TP 消耗。
 * %1 - 消耗     %2 - TP
 * @default %1%2
 *
 * @param TP Font Size
 * @text TP 字體大小
 * @parent ---TP Costs---
 * @type number
 * @min 1
 * @desc 調整顯示 TP 的顯示字體大小。
 * 預設 : 28
 * @default 20
 *
 * @param TP Text Color
 * @text TP 文字顏色
 * @parent ---TP Costs---
 * @type number
 * @min 0
 * @max 31
 * @desc 調整 TP 的文字顏色 ( 使用視窗樣式顏色指定 )。
 * 預設 : 29
 * @default 29
 *
 * @param TP Icon
 * @text TP 圖標
 * @parent ---TP Costs---
 * @type number
 * @min 0
 * @desc 設定使用幾號圖標表示 TP 消耗。
 * 如果想要不使用圖標保持為 0 即可。
 * @default 164
 *
 * @help
 * ============================================================================
 * 介紹
 * ============================================================================
 *
 * RPG 的技能包括三個主要部分：消耗，傷害和效果。 儘管並非技能需要所有部分，但
 * 它們肯定佔了很大一部分。
 * 傷害將由另一個插件處理，但此插件將為技能消耗和技能效果提供核心處理。
 *
 * 該插件還包括讓角色將 HP，MP 或 TP 量條換成其他更合適的角色的功能。
 * （例如，某些角色類別不使用 MP 或 TP ）。
 *
 * ============================================================================
 * 注釋
 * ============================================================================
 *
 * 這些注釋可以調整技能消耗或特殊技能效果。
 *
 * 技能注釋 :
 *   <HP Cost: x>
 *   更改技能讓它使用 HP 消耗，x 為消耗多少的值。
 *   RPG Maker MV 編輯器缺少 HP 消耗功能，這將可以使用 HP 作為消耗。
 *
 *   <HP Cost: x%>
 *   更改技能消耗為角色 HP 最大值的百分比。
 *
 *   <MP Cost: x>
 *   更改技能讓它使用 MP 消耗，x 為消耗多少的值。
 *   這將有助於略過編輯器上限 9999 的數值設定。
 *
 *   <MP Cost: x%>
 *   更改技能消耗為角色 MP 最大值的百分比。
 *
 *   <TP Cost: x>
 *   更改技能讓它使用 TP 消耗，x 為消耗多少的值。
 *   這將有助於略過編輯器上限 99 的數值設定。
 *
 *   <TP Cost: x%>
 *   更改技能消耗為角色 TP 最大值的百分比。
 *   儘管預設的 TP 最大值為 100，但此注釋對於將更改角色的 TP 最大值的很有用。
 *
 *   <Hide in Battle>
 *   這將在戰鬥中隱藏並禁止使用技能。
 *
 *   <Hide in Field>
 *   這將在戰鬥之外隱藏並禁止使用技能。
 *
 *   <Hide if Learned Skill: x>
 *   <Hide if Learned Skill: x, x, x>
 *   <Hide if Learned Skill: x to y>
 *   如果已學習技能 x，將隱藏並禁止使用此技能。
 *   如果列出多個技能，則如果已學習任何列出的技能，則該技能將被隱藏並禁止使用。
 *   僅適用於已學習的技能，而不適用於「特性」添加的技能。
 *
 * ============================================================================
 * 量條交換
 * ============================================================================
 *
 * 假設您使用的所有插件都保持相同的 HP、MP 和 TP 順序，並且不覆蓋預設的量條顯
 * 示，則該插件還使您可以將 HP、MP 和 TP 量條切換為想要的任何順序。
 * 如果您使用任何插件擴展，它們也可以互換。
 *
 * 備註 : 如果您沒有在資料庫的「系統」頁面中勾選「在戰鬥中顯示 TP」，則第三個
 * 量條將不顯示任何內容。
 *
 * 類別注釋 :
 *   <Swap Gauge x: y>
 *   這會將量條 x（1、2或3）更改為 y 。
 *   將 y 替換為 HP、 MP 或 TP 讓它在該量條槽中顯示該量條類型。
 *   如果希望該量條槽不顯示任何內容，請在注釋的 y 替換為「Nothing」或「Null」。
 *
 * 武器、盔甲及狀態注釋 :
 *   <Swap Gauge x: y>
 *   擁有裝備或包含這些注釋狀態的角色，或有這些注釋狀態的敵人，將顯示那些變更
 *   過後的量條，以代替預設設定或由「類別』或「敵人」注釋的設定。
 *
 *   優先順序如下排列：
 *     武器、盔甲、狀態、類別、敵人
 *
 * ============================================================================
 * 瘋狂模式 - 技能消耗
 * ============================================================================
 *
 * 對於希望更好控制技能消耗和技能效果的作者，有注釋可將程式碼使用於技能的消耗
 * 或效果。對於效果，這將擴展到道具控制。
 *
 *   <Custom HP Cost>       範例 :   <Custom HP Cost>
 *    code                            cost += $gameVariables.value(1);
 *    code                           </Custom HP Cost>
 *   </Custom HP Cost>
 *   這個範例讓技能可以根據程式碼自定義 HP 消耗。
 *   這段程式碼，「Cost」（消耗）是已經先設定 HP 消耗和 HP 百分比消耗的變數。
 *
 *   <Custom MP Cost>       範例 :   <Custom MP Cost>
 *    code                            cost += $gameVariables.value(1);
 *    code                           </Custom MP Cost>
 *   </Custom MP Cost>
 *   這個範例讓技能可以根據程式碼自定義 MP 消耗。
 *   這段程式碼，「Cost」（消耗）是已經先設定 MP 消耗和 MP 百分比消耗的變數。
 *
 *   <Custom TP Cost>       範例 :   <Custom TP Cost>
 *    code                            cost += $gameVariables.value(1);
 *    code                           </Custom TP Cost>
 *   </Custom TP Cost>
 *   這個範例讓技能可以根據程式碼自定義 TP 消耗。
 *   這段程式碼，「Cost」（消耗）是已經先設定 TP 消耗和 TP 百分比消耗的變數。
 *
 * ============================================================================
 * 瘋狂模式 - 自定義顯示要求
 * ============================================================================
 *
 * 對於那些想顯示某些技能並使用 JavaScript 知識在任何自定義條件下將其禁止使用
 * 的作者，請使用以下命令：
 *
 * 技能注釋 :
 *   <Custom Show Eval>
 *   if (user.level > 50) { //如果角色等級 > 50
 *     visible = true;      //顯示該技能並且可以使用
 *   } else {               //否則
 *     visible = false;     //不顯示該技能並且禁止使用
 *   }
 *   </Custom Show Eval>
 *   如果條件滿足為 true 的情況，則顯示該技能（不隱藏）並在滿足所有其他條件
 *   下讓該技能可以被使用。
 *   如果條件不滿足為 false 的情況，則該技能將被禁止使用並從技能列表中隱藏。
 *
 * ============================================================================
 * 瘋狂模式 - 自定義必需條件與執行
 * ============================================================================
 *
 * 對於那些有一定 JavaScript 經驗的人，您可以使用以下注釋來限制一個技能以及執
 * 行該技能時要處理的程式碼類型。
 *
 * 技能注釋 :
 *
 *   <Custom Requirement>
 *    if ($gameParty.gold() > 1000) { //如果隊伍金錢 > 1000
 *      value = true;                 //則執行該技能
 *    } else {                        //否則
 *      value = false;                //不執行技能
 *    }
 *   </Custom Requirement>
 *   如果將值符合條件為 true，則只要滿足所有其他要求，該技能將可用。
 *   如果將該值不符合條件為 false，則該技能將無法使用。
 *
 *   <Custom Execution>
 *    $gameParty.loseGold(1000);
 *   </Custom Execution>
 *   這個注釋之間的程式碼將會執行在使用此技能後，為使用技能結果。
 *
 * ============================================================================
 * 瘋狂模式 - 自定義消耗顯示
 * ============================================================================
 *
 * 對於那些有一點 JavaScript 經驗的人，您可以添加新的方法來顯示技能消耗。
 *
 * 技能注釋 :
 *
 *   <Cost Display Eval>
 *    var variableId = 1;
 *    var value = 1000;
 *    $gameVariables.setValue(variableId, value);
 *   </Cost Display Eval>
 *   此注釋將在顯示技能消耗之前進行。
 *   這樣，您就可以為技能消耗顯示文字設定變數，而無需設定其他內容。
 *
 *   <Custom Cost Display>
 *    \c[4]\v[1]\c[0] Gold
 *   </Custom Cost Display>
 *   這是在技能消耗之前顯示的自定義內容。
 *   您可以在此注釋中使用控制字元。
 *
 * ============================================================================
 * 瘋狂模式 - 技能階段
 * ============================================================================
 *
 * 對於技能，在不同階段可以使用多種效果。
 * 各個階段順序如下：
 *
 *    開頭階段效果（受此插件影響） / Before Eval
 *    當技能成功給予（打擊）後:
 *    - 傷害前階段效果（受此插件影響） / Pre-Damage Eval
 *    - 傷害階段
 *    - 傷害後階段效果（受此插件影響） / Post-Damage Eval
 *    - 道具特性階段效果
 *    結尾階段效果（受此插件影響） / Before Eval
 *
 * 此插件可以影響四個階段。
 * 其中兩個與效果是否成功打擊無關，其中兩個與技能是否使用很重要。
 *
 * 技能與道具注釋 :
 *   <Before Eval>
 *    code
 *    code
 *   </Before Eval>
 *
 *   <Pre-Damage Eval>
 *    code
 *    code
 *   </Pre-Damage Eval>
 *
 *   <Post-Damage Eval>
 *    code
 *    code
 *   </Post-Damage Eval>
 *
 *   <Before Eval>
 *    code
 *    code
 *   </After Eval>
 *
 *   如果您希望對技能使用自定義效果，則可以將相應的注釋輸入到技能（或道具）
 *   注釋欄中，它將運行注釋之間的程式碼。
 *   但是，在此注釋中使用任何形式的注釋將阻擋後面的程式碼。
 *
 *   使用 <Pre-Damage Eval> 和 <Post-Damage Eval> ，作者可以將此利用在
 *  「將造成的傷害」和「已透過 'value' 變數造成的傷害」。
 *   <Pre-Damage Eval> 注釋能夠更改「value」變數，並將其返回給傷害，讓
 *   傷害可以受到程式碼的設定影響。
 *
