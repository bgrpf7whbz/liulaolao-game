# 素材清单与节点核对

## 目录位置
`D:\立夏\同济\论文\Part2沉浸式互动视频\Immersion Game\assets`

## 全部素材清单

| 文件名 | 类型前缀 | 尺寸 |
|---|---|---|
| bg_corner_gate_inside.png | bg | 1280x720 |
| bg_corner_gate_street.png | bg | 1280x720 |
| bg_dusk_road.png | bg | 1280x720 |
| bg_fengjie_courtyard.png | bg | 1280x720 |
| bg_fengjie_insidehouse.png | bg | 1280x720 |
| bg_ningrong_street.png | bg | 1280x720 |
| bg_rural_courtyard.png | bg | 1280x720 |
| bg_rural_home.png | bg | 1280x720 |
| bg_things_inside.png | bg | 1280x720 |
| cg_back_gate_kids.png | cg | 1280x720 |
| cg_banger_grabs_meat.png | cg | 1280x720 |
| cg_crimson_door_curtain.png | cg | 1280x720 |
| cg_first_meeting.png | cg | 1280x720 |
| cg_haughty_servants.png | cg | 1280x720 |
| cg_humble_request.png | cg | 1280x720 |
| cg_main_gate.png | cg | 1280x720 |
| cg_parting_corner_gate.png | cg | 1280x720 |
| cg_ping_er_observes.png | cg | 1280x720 |
| cg_receiving_silver.png | cg | 1280x720 |
| cg_screen_borrowing.png | cg | 1280x720 |
| cg_striking_clock.png | cg | 1280x720 |
| cg_waiting_at_daoting.png | cg | 1280x720 |
| cg_waiting_hall.png | cg | 1280x720 |
| cg_yimen_corridor.png | cg | 1280x720 |
| ch_banger.png | ch | 640x960 |
| ch_carrying_servants.png | ch | 640x960 |
| ch_gate_boy.png | ch | 640x960 |
| ch_gouer.png | ch | 640x960 |
| ch_guiding_boy.png | ch | 640x960 |
| ch_lady_wang.png | ch | 640x960 |
| ch_liu_laolao_after.png | ch | 640x960 |
| ch_liu_laolao_before.png | ch | 640x960 |
| ch_liu_shi.png | ch | 640x960 |
| ch_liulaolao_baner.png | ch | 640x960 |
| ch_maid_hired.png | ch | 640x960 |
| ch_old_servant.png | ch | 640x960 |
| ch_ping_er.png | ch | 640x960 |
| ch_qinger.png | ch | 640x960 |
| ch_wang_cheng.png | ch | 640x960 |
| ch_wang_xifeng.png | ch | 640x960 |
| ch_zhou_rui.png | ch | 640x960 |
| ch_zhou_rui_wife.png | ch | 640x960 |
| cover_title.png | cover | 1280x800 |
| cu-clock.png | cu | 1024x1024 |
| cu-elefent.png | cu | 1280x720 |
| cu-light.png | cu | 1280x720 |
| cu-money.png | cu | 1024x1024 |
| cu-stone lion.png | cu | unknown |
| it-cup.png | it | 1024x1024 |
| it-pocket.png | it | 1024x1024 |
| it-shoulu.png | it | 1024x1024 |
| map_corner_gate_exit.png | map | 1280x720 |
| map_fengjie_compound.png | map | 1280x720 |
| map_guidance_overview.png | map | 1280x720 |
| map_liulaolao_house.png | map | 1280x720 |
| map_main_gate_area.png | map | 1280x720 |
| map_outer_courtyard.png | map | 1280x720 |
| map_return_route.png | map | 1280x720 |
| map_rural_start.png | map | 1280x720 |
| map_street_approach.png | map | 1280x720 |
| ui_avatar_frame.png | ui | 1024x640 |
| ui_choice_buttons.png | ui | 1024x640 |
| ui_dialogue_box.png | ui | 1024x640 |

## 当前节点配置实际使用素材

| 节点/场景 | 背景 | 立绘 | 状态 |
|---|---|---|---|
| 开始界面 | cg_main_gate.png | — | 已存在 |
| 序幕 | bg_dusk_road.png | — | 已存在 |
| 城外家中（home） | bg_rural_home.png | —（第一人称代理） | 已存在 |
| 荣府角门（cornerGateStreet） | bg_corner_gate_street.png | ch_banger.png | 已存在 |
| 周瑞家院子（zhouCourtyard） | bg_fengjie_courtyard.png | ch_zhou_rui_wife.png | 已存在 |
| 凤姐倒厅（fengjieHall） | bg_fengjie_insidehouse.png | ch_ping_er.png / ch_wang_xifeng.png | 已存在 |
| 被看门人赶走结局 | bg_dusk_road.png | — | 已存在 |
| 周瑞家闭门结局 | bg_things_inside.png | — | 已存在 |
| 平儿拦在屋外结局 | bg_fengjie_courtyard.png | — | 已存在 |
| 凤姐送走结局 | bg_dusk_road.png | — | 已存在 |
| 刘姥姥立绘（对话节点） | — | ch_liu_laolao_before.png | 已存在 |

## 缺口清单

当前实现所需素材均已存在，无缺口。

备注：
- `cg_receiving_silver.png` 已恢复为成功结局 CG 正常使用。
- MAP 系列图片当前未作为可走地图使用，转为教学/转场备用。
- `cu-*` 文化细节图标当前未直接引用，文化热点使用 CSS 微光提示替代。
