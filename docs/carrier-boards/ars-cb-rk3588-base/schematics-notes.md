---
id: ars-cb-rk3588-base-schematics-notes
title: Примечания к схемотехнике
sidebar_label: Schematics notes
---

## Комментарии к разводке сигналов

Ниже — черновые замечания по разводке/обвязке на основе колонок **Domain** и **Notes** из таблицы P‑пинов (см. `hardware.md`).

### Подтяжки (PU/PD) и номиналы

- **GBE0 конфигурация/индикация**:
  - `GBE0_LINK100#` (P21): **PD 4.7k** (домен 3.3V ext)
  - `GBE0_LINK1000#` (P22): **PU 4.7k** (домен 3.3V ext)
  - `GBE0_LINK_ACT#` (P25): **PD 4.7k** (домен 3.3V ext)
- **SDIO детект/strap**:
  - `SDIO_CD#` (P35): **PU 100k** (PMUIO1 1.8V, ext)
  - `BOOT_SEL0#` (P123): **PU 100k** (SARADC, 0..1.8V)
- **I2C PM**:
  - `I2C_PM_CK/DAT` (P121/P122): **PU 2.2k** (1.8V ext) + отмечен **Level Shifter**
- **HDMI RX I2C**:
  - `HDMI_CTRL_CK/DAT` (P105/P106): **PU 100k** (VCCIO5 1.8V, ext)
- **USB enable/OC**:
  - `USB1_EN_OC#` (P67): **PU 10k** (PMUIO2 3.3V, ext) — при этом в колонке Design указан `GND` (TODO: уточнить корректность строки в PDF).

### Домены напряжений и Level Shifter

По P‑таблице встречаются домены:

- **VCCIO1 1.8V**, **VCCIO4 1.8V**, **VCCIO5 1.8V**, **VCCIO6 1.8V**
- **VCCIO2 1.8V / 3.3V** (SDMMC0)
- **PMUIO1 1.8V**, **PMUIO2 3.3V** (служебные/кнопки/часть интерфейсов)
- **SARADC 0..1.8V** (BOOT_SEL0#)
- **3.3V ext** (часть сигналов Ethernet LED/CFG)

Сигналы с явной отметкой **Level Shifter**: `PCIE_A_RST#` (P75), `I2C_PM_*` (P121/P122), `SER1_*` (P134/P135), `CAN0_*` (P143/P144) и др.
TODO: уточнить направление/уровни преобразования для каждого level shifter по схеме.

### Высокоскоростные интерфейсы (дифф‑пары)

По таблице P‑пинов к высокоскоростным группам относятся:

- **MIPI CSI1**: `CSI1_CK±`, `CSI1_RX0..RX3 ±`
- **SerDes2 (комбо PCIe/SATA/USB SS)**: `SATA_TX±`, `SATA_RX±` (указаны развязывающие конденсаторы)
- **PCIe Gen3**: `PCIE_*_TX±`, `PCIE_*_RX±`, refclk
- **HDMI RX (HDMI IN v2.0)**: `HDMI_RX_D[0..2]±`, `HDMI_RX_CLK±`

TODO: добавить конкретные требования к импедансу/допускам по длине после получения design rules (SMARC/PCIe/USB/HDMI/MIPI).

### Развязка/AC‑coupling на линиях SerDes

- Для SerDes2 (P48/P49/P89/P90 и др. по таблице) в Notes встречаются конденсаторы **0.22uF**.
- Для некоторых SerDes/PCIe линий в таблице встречаются **0.1uF** (см. продолжение таблиц в даташите).

TODO: подтвердить номиналы/расположение конденсаторов по схемам платы.

### Диагностика и test points

- В таблице явно отмечены Test Point: `SMB_ALERT#` (P1), `GBE1_SDP` (P5), `GBE0_SDP` (P6).
TODO: дополнить списком тест‑падов по полной схеме/плану тестпоинтов.
