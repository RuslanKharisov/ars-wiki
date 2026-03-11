---
id: ars-cb-rk3588-base-hardware
title: Аппаратные характеристики
sidebar_label: Hardware
---

## Интерфейсы и группы сигналов

Ниже приведена черновая сводка по системному разъёму **P (Primary Side)** несущей платы на основе даташита (`datasheet_IB_SM_RK_compressed.pdf`, Приложение 1).

По таблице выводов на разъём выведены группы:

- **MIPI CSI (камера)**: дифференциальные пары CLK/D0..D3 (группа `CSI1_*`).
- **Ethernet (GBE0)**: линии MDI0..MDI3, а также конфигурационные/индикаторные сигналы (`LINK100#`, `LINK1000#`, `LINK_ACT#`, `CTREF`).
- **SPI/SDIO**: SPI0 (CS/CLK/MOSI/MISO) и SDMMC0 (CMD/CLK/D0..D3, CD#, WP, PWR_EN).
- **SerDes (комбо PCIe/SATA/USB SS)**: линии `SATA_TX/RX` (в даташите обозначены как комбо‑линии SerDes2).
- **eSPI/SPI/QSPI**: сигналы `ESPI_* / SPI1_* / QSPI_*` (в реализации на плате сопоставлены с `SPI3_*`).
- **USB 2.0**: HOST/OTG группы `USB0/USB1` + линии для Type‑C Port0 (`TYPEC0_OTG_*`, `SBU*`).
- **PCIe Gen3**: PERST#, CLKREQ#, Refclk, TX/RX пары (часть линий отмечена как test/NC).
- **HDMI RX / DP lane map**: входные дифф‑пары и I2C‑управление (SCL/SDA).
- **GPIO/служебные**: GPIO0..GPIO11, I2C PM, Boot straps, Reset/Power button, UART, CAN.
- **Питание**: `VDD_IN / VCC_SYS` (несколько контактов).
- **Тест/диагностика**: отдельные строки помечены как `Test Point`.

## Таблица выводов системного разъёма (P-connector)

Ниже приведены сигналы разъёма P (carrier board) в соответствии с даташитом.

### Test points / GND (выборочно)

| P-Pin | SMARC Signal | Board Net / Function | RK3588 Ball | Voltage Domain | Notes |
| ----- | ------------ | -------------------- | ----------- | -------------- | ----- |
| P1 | SMB_ALERT# | - | Test Point | - | SMBus alert (Test Point) |
| P2 | GND | GND | - | GND | Ground |
| P5 | GBE1_SDP | - | Test Point | - | Test Point |
| P6 | GBE0_SDP | - | Test Point | - | Test Point |

### MIPI CSI1 (CLK/D0..D3)

| P-Pin | SMARC Signal | Board Net / Function | RK3588 Ball | Voltage Domain | Notes |
| ----- | ------------ | -------------------- | ----------- | -------------- | ----- |
| P3 | CSI1_CK+ | MIPI_CSI1_RX_CLK0P | AJ31 | - | MIPI CSI-1 clock + |
| P4 | CSI1_CK- | MIPI_CSI1_RX_CLK0N | AJ32 | - | MIPI CSI-1 clock - |
| P7 | CSI1_RX0+ | MIPI_CSI1_RX_D0P | AG31 | - | MIPI CSI-1 D0+ |
| P8 | CSI1_RX0- | MIPI_CSI1_RX_D0N | AG32 | - | MIPI CSI-1 D0- |
| P10 | CSI1_RX1+ | MIPI_CSI1_RX_D1P | AH31 | - | MIPI CSI-1 D1+ |
| P11 | CSI1_RX1- | MIPI_CSI1_RX_D1N | AH32 | - | MIPI CSI-1 D1- |
| P13 | CSI1_RX2+ | MIPI_CSI1_RX_D2P | AK31 | - | MIPI CSI-1 D2+ |
| P14 | CSI1_RX2- | MIPI_CSI1_RX_D2N | AK32 | - | MIPI CSI-1 D2- |
| P16 | CSI1_RX3+ | MIPI_CSI1_RX_D3P | AL31 | - | MIPI CSI-1 D3+ |
| P17 | CSI1_RX3- | MIPI_CSI1_RX_D3N | AL32 | - | MIPI CSI-1 D3- |

### Ethernet GBE0 (MDI + LED/CFG)

| P-Pin | SMARC Signal | Board Net / Function | RK3588 Ball | Voltage Domain | Notes |
| ----- | ------------ | -------------------- | ----------- | -------------- | ----- |
| P19 | GBE0_MDI3- | PHY0_MDI3_N | - | - | TODO: уточнить Ball/Domain |
| P20 | GBE0_MDI3+ | PHY0_MDI3_P | - | - | TODO: уточнить Ball/Domain |
| P21 | GBE0_LINK100# | PHY0_LED0@CFG_EXT | - | 3.3V ext | PD 4.7k |
| P22 | GBE0_LINK1000# | PHY0_LED2@CFG_LDO1 | - | 3.3V ext | PU 4.7k |
| P23 | GBE0_MDI2- | PHY0_MDI2_N | - | - | TODO: уточнить Ball/Domain |
| P24 | GBE0_MDI2+ | PHY0_MDI2_P | - | - | TODO: уточнить Ball/Domain |
| P25 | GBE0_LINK_ACT# | PHY0_LED1@CFG_LDO0 | - | 3.3V ext | PD 4.7k |
| P26 | GBE0_MDI1- | PHY0_MDI1_N | - | - | TODO: уточнить Ball/Domain |
| P27 | GBE0_MDI1+ | PHY0_MDI1_P | - | - | TODO: уточнить Ball/Domain |
| P28 | GBE0_CTREF | - | - | - | TODO: уточнить Ball/Domain |
| P29 | GBE0_MDI0- | PHY0_MDI0_N | - | - | TODO: уточнить Ball/Domain |
| P30 | GBE0_MDI0+ | PHY0_MDI0_P | - | - | TODO: уточнить Ball/Domain |

### SPI0 / SDIO (SDMMC0)

| P-Pin | SMARC Signal | Board Net / Function | RK3588 Ball | Voltage Domain | Notes |
| ----- | ------------ | -------------------- | ----------- | -------------- | ----- |
| P31 | SPI0_CS1# | SPI0_CS1_M2 | E25 | VCCIO4 1.8V | Int PU |
| P33 | SDIO_WP | - | - | - | TODO: уточнить |
| P34 | SDIO_CMD | SDMMC0_CMD | AE2 | VCCIO2 1.8V / 3.3V | int PU |
| P35 | SDIO_CD# | SDMMC_DET_L | P31 | PMUIO1 1.8V | ext PU 100k |
| P36 | SDIO_CK | SDMMC0_CLK | AE1 | VCCIO2 1.8V / 3.3V | int PD |
| P37 | SDIO_PWR_EN | SDMMC_PWREN | U33 | PMUIO2 3.3V | int PU |
| P39 | SDIO_D0 | SDMMC0_D0 | AD2 | VCCIO2 1.8V / 3.3V | int PU |
| P40 | SDIO_D1 | SDMMC0_D1 | AD1 | VCCIO2 1.8V / 3.3V | int PU |
| P41 | SDIO_D2 | SDMMC0_D2 | AF2 | VCCIO2 1.8V / 3.3V | int PU |
| P42 | SDIO_D3 | SDMMC0_D3 | AF1 | VCCIO2 1.8V / 3.3V | int PU |
| P43 | SPI0_CS0# | SPI0_CS0_M2 | E24 | VCCIO4 1.8V | int PU |
| P44 | SPI0_CK | SPI0_CLK_M2 | D27 | VCCIO4 1.8V | int PD |
| P45 | SPI0_DIN | SPI0_MISO_M2 | D25 | VCCIO4 1.8V | int PD |
| P46 | SPI0_DO | SPI0_MOSI_M2 | D26 | VCCIO4 1.8V | int PD |

### SerDes2 (комбо PCIe2.0/SATA3/USB3 SS)

| P-Pin | SMARC Signal | Board Net / Function | RK3588 Ball | Voltage Domain | Notes |
| ----- | ------------ | -------------------- | ----------- | -------------- | ----- |
| P48 | SATA_TX+ | PCIE20_2_TXP@SATA30_2_TXP@USB30_2_SSTXP | H30 | PCIE20/SATA3 | Serdes2 TX, 0.22uF |
| P49 | SATA_TX- | PCIE20_2_TXN@SATA30_2_TXN@USB30_2_SSTXN | H29 | PCIE20/SATA3 | Serdes2 TX, 0.22uF |
| P51 | SATA_RX+ | PCIE20_2_RXP@SATA30_2_RXP@USB30_2_SSRXP | J31 | PCIE20/SATA3 | Serdes2 RX |
| P52 | SATA_RX- | PCIE20_2_RXN@SATA30_2_RXN@USB30_2_SSRXN | J30 | PCIE20/SATA3 | Serdes2 RX |

### eSPI / SPI / QSPI (SPI3)

| P-Pin | SMARC Signal | Board Net / Function | RK3588 Ball | Voltage Domain | Notes |
| ----- | ------------ | -------------------- | ----------- | -------------- | ----- |
| P54 | ESPI_CS0# / SPI1_CS0# / QSPI_CS0# | SPI3_CS0_M1 | AJ25 | VCCIO6 1.8V | int PU |
| P55 | ESPI_CS1# / SPI1_CS1# / QSPI_CS1# | SPI3_CS1_M1 | AK24 | VCCIO6 1.8V | int PD |
| P56 | ESPI_CK / SPI1_CK / QSPI_CK | SPI3_CLK_M1 | AJ28 | VCCIO6 1.8V | int PU |
| P57 | ESPI_IO_1 / SPI1_DIN / QSPI_IO_1 | SPI3_MISO_M1 | AJ26 | VCCIO6 1.8V | int PD |
| P58 | ESPI_IO_0 / SPI1_DO / QSPI_IO_0 | SPI3_MOSI_M1 | AJ27 | VCCIO6 1.8V | int PD |

### USB 2.0 (HOST/OTG) + Type-C Port0 (USB2 + SBU)

| P-Pin | SMARC Signal | Board Net / Function | RK3588 Ball | Voltage Domain | Notes |
| ----- | ------------ | -------------------- | ----------- | -------------- | ----- |
| P60 | USB0+ | USB20_HOST0_DP | AK6 | USB2.0 HOST | USB2.0 HOST0 |
| P61 | USB0- | USB20_HOST0_DM | AL6 | USB2.0 HOST | USB2.0 HOST0 |
| P62 | USB0_EN_OC# | USB0_EN_OC# | P30 | PMUIO2 3.3V | int PU |
| P63 | USB0_VBUS_DET | - | - | - | TODO: уточнить Ball/Domain/Notes |
| P64 | USB0_OTG_ID | - | - | - | TODO: уточнить Ball/Domain/Notes |
| P65 | USB1+ | USB20_HOST1_DP | AL7 | USB2.0 OTG/HOST | USB2.0 HOST1 |
| P66 | USB1- | USB20_HOST1_DM | AM7 | USB2.0 OTG/HOST | USB2.0 HOST1 |
| P67 | USB1_EN_OC# | GND | T32 | PMUIO2 3.3V | ext PU 10k |
| P69 | USB2+ | TYPEC0_OTG_DP | AL12 | USB2.0 OTG/HOST | Type-C Port0 |
| P70 | USB2- | TYPEC0_OTG_DM | AM12 | USB2.0 OTG/HOST | Type-C Port0 |
| P71 | USB2_EN_OC# | GND | - | - | Connected to GND (TODO: уточнить) |
| P72 | RSVD | TYPEC0_SBU1 | AL15 | TYPE-C 0/1 | Type-C Port0 |
| P73 | RSVD | TYPEC0_SBU2 | AM15 | TYPE-C 0/1 | Type-C Port0 |
| P74 | USB3_EN_OC# | USB3_EN_OC# | - | - | Connected to GND (TODO: уточнить) |

### PCIe Gen3 / Refclk / PERST / CLKREQ

| P-Pin | SMARC Signal | Board Net / Function | RK3588 Ball | Voltage Domain | Notes |
| ----- | ------------ | -------------------- | ----------- | -------------- | ----- |
| P75 | PCIE_A_RST# | PCIE_PERSTN | AG26 | VCCIO5 | Level Shifter 3.3V |
| P77 | PCIE_B_CKREQ# | - | - | - | TODO: уточнить |
| P78 | PCIE_A_CKREQ# | PCIE30X4_CLKREQN | T29 | PMUIO2 3.3V | Int PU |
| P80 | PCIE_C_REFCK+ | PCIE30_PORT0_TX1P | D32 | PCIe Gen3 | Port0 TX1, 0.22uF |
| P81 | PCIE_C_REFCK- | PCIE30_PORT0_TX1N | D33 | PCIe Gen3 | Port0 TX1, 0.22uF |
| P83 | PCIE_A_REFCK+ | PCIE30_REFCLKP_SLOT1 | - | PCIe Gen3 | Refclk |
| P84 | PCIE_A_REFCK- | PCIE30_REFCLKN_SLOT1 | - | PCIe Gen3 | Refclk |
| P86 | PCIE_A_RX+ | PCIE30_PORT1_RX3P | C31 | PCIe Gen3 | Port1 RX3 |
| P87 | PCIE_A_RX- | PCIE30_PORT1_RX3N | B31 | PCIe Gen3 | Port1 RX3 |
| P89 | PCIE_A_TX+ | PCIE30_PORT1_TX3P | C29 | PCIe Gen3 | Port1 TX3, 0.22uF |
| P90 | PCIE_A_TX- | PCIE30_PORT1_TX3N | B29 | PCIe Gen3 | Port1 TX3, 0.22uF |

### HDMI RX (HDMI IN v2.0) + управление (I2C)

| P-Pin | SMARC Signal | Board Net / Function | RK3588 Ball | Voltage Domain | Notes |
| ----- | ------------ | -------------------- | ----------- | -------------- | ----- |
| P92 | HDMI_D2+ / DP1_LANE0+ | HDMI_RX_D2P | AJ5 | HDMI RX | HDMI IN v2.0 |
| P93 | HDMI_D2- / DP1_LANE0- | HDMI_RX_D2N | AJ4 | HDMI RX | HDMI IN v2.0 |
| P95 | HDMI_D1+ / DP1_LANE1+ | HDMI_RX_D1P | AH6 | HDMI RX | HDMI IN v2.0 |
| P96 | HDMI_D1- / DP1_LANE1- | HDMI_RX_D1N | AH5 | HDMI RX | HDMI IN v2.0 |
| P98 | HDMI_D0+ / DP1_LANE2+ | HDMI_RX_D0P | AG5 | HDMI RX | HDMI IN v2.0 |
| P99 | HDMI_D0- / DP1_LANE2- | HDMI_RX_D0N | AG4 | HDMI RX | HDMI IN v2.0 |
| P101 | HDMI_CK+ / DP1_LANE3+ | HDMI_RX_CLKP | AF6 | HDMI RX | HDMI IN v2.0 |
| P102 | HDMI_CK- / DP1_LANE3- | HDMI_RX_CLKN | AF5 | HDMI RX | HDMI IN v2.0 |
| P104 | HDMI_HPD / DP1_HPD | - | - | - | TODO: уточнить |
| P105 | HDMI_CTRL_CK / DP1_AUX+ | HDMI_RX_SCL_M1 | AG25 | VCCIO5 1.8V | ext PU 100k |
| P106 | HDMI_CTRL_DAT / DP1_AUX- | HDMI_RX_SDA_M1 | AG24 | VCCIO5 1.8V | ext PU 100k |
| P107 | DP1_AUX_SEL | - | - | - | TODO: уточнить |

### GPIO (CAM/HDA/PWM/TACH/UART mux)

| P-Pin | SMARC Signal | Board Net / Function | RK3588 Ball | Voltage Domain | Notes |
| ----- | ------------ | -------------------- | ----------- | -------------- | ----- |
| P108 | GPIO0 / CAM0_PWR# | GPIO0-I2C7_SCL_M0 | F26 | VCCIO1 1.8V | Int PD |
| P109 | GPIO1 / CAM1_PWR# | GPIO1-I2C7_SDA_M0 | F27 | VCCIO1 1.8V | Int PD |
| P110 | GPIO2 / CAM0_RST# | GPIO2-UART6_RX_M1 | A24 | VCCIO4 1.8V | Int PD |
| P111 | GPIO3 / CAM1_RST# | GPIO3-UART6_TX_M1 | A25 | VCCIO5 1.8V | Int PD |
| P112 | GPIO4 / HDA_RST# | GPIO4-UART6_RTSN_M1 | A26 | VCCIO4 1.8V | Int PD |
| P113 | GPIO5 / PWM_OUT | GPIO5-UART6_CTSN_M1 | A27 | VCCIO4 1.8V | Int PD |
| P114 | GPIO6 / TACHIN | GPIO6-UART1_TX_M1 | E26 | VCCIO4 1.8V | Int PU |
| P115 | GPIO7 | GPIO7-UART1_RX_M1 | E27 | VCCIO4 1.8V | Int PU |
| P116 | GPIO8 | GPIO8-UART1_RTSN_M1 | F24 | VCCIO4 1.8V | Int PU |
| P117 | GPIO9 | GPIO9-UART1_CTSN_M1 | F25 | VCCIO4 1.8V | Int PU |
| P118 | GPIO10 | GPIO10-UART9_TX_M2 | AB28 | VCCIO5 1.8V | int PD |
| P119 | GPIO11 | GPIO11-UART9_RX_M2 | AA27 | VCCIO5 1.8V | int PD |

### I2C PM / Boot straps / Reset / Buttons

| P-Pin | SMARC Signal | Board Net / Function | RK3588 Ball | Voltage Domain | Notes |
| ----- | ------------ | -------------------- | ----------- | -------------- | ----- |
| P121 | I2C_PM_CK | I2C6_SCL_M0 | W31 | PMUIO2 | Level Shifter, 1.8V ext PU 2.2k |
| P122 | I2C_PM_DAT | I2C6_SDA_M0 | V31 | PMUIO2 | Level Shifter, 1.8V ext PU 2.2k |
| P123 | BOOT_SEL0# | BOOT_SARADC_IN0 | AM16 | SARADC | 0..1.8V, PU 100k |
| P124 | BOOT_SEL1# | - | - | - | TODO: уточнить |
| P125 | BOOT_SEL2# | - | - | - | TODO: уточнить |
| P126 | RESET_OUT# | RESET_L | M31 | PMUIO1 1.8V | NPOR |
| P127 | RESET_IN# | RESET_BTN_L | - | 1.8V | TODO: уточнить Ball/Domain |
| P128 | POWER_BTN# | PWRON_L | - | 1.8V / 5V | TODO: уточнить Ball/Domain |

### UART / CAN

| P-Pin | SMARC Signal | Board Net / Function | RK3588 Ball | Voltage Domain | Notes |
| ----- | ------------ | -------------------- | ----------- | -------------- | ----- |
| P129 | SER0_TX | UART3_TX_M0 | G27 | VCCIO1 1.8V | Int Z |
| P130 | SER0_RX | UART3_RX_M0 | G29 | VCCIO1 1.8V | Int Z |
| P131 | SER0_RTS# | UART3_RTSN | F30 | VCCIO1 1.8V | Int PD |
| P132 | SER0_CTS# | UART3_CTSN | E31 | VCCIO1 1.8V | Int PD |
| P134 | SER1_TX | UART2_TX_M0_DEBUG | P29 | PMUIO2 | Level Shifter, 1.8V |
| P135 | SER1_RX | UART2_RX_M0_DEBUG | R29 | PMUIO2 | Level Shifter, 1.8V |
| P136 | SER2_TX | UART4_TX_M0 | F28 | VCCIO1 1.8V | Int PD |
| P137 | SER2_RX | UART4_RX_M0 | E28 | VCCIO1 1.8V | Int PD |
| P138 | SER2_RTS# | UART4_RTSN | D30 | VCCIO1 1.8V | Int PD |
| P139 | SER2_CTS# | UART4_CTSN | E29 | VCCIO1 1.8V | Int PD |
| P140 | SER3_TX | UART0_TX_M2 | AL29 | VCCIO6 1.8V | int PD |
| P141 | SER3_RX | UART0_RX_M2 | AL28 | VCCIO6 1.8V | int PD |
| P143 | CAN0_TX | CAN0_TX_M0 | T28 | PMUIO2 | Level Shifter, 1.8V |
| P144 | CAN0_RX | CAN0_RX_M0 | T31 | PMUIO2 | Level Shifter, 1.8V |
| P145 | CAN1_TX | CAN1_TX_M1 | AM25 | VCCIO6 1.8V | int PD |
| P146 | CAN1_RX | CAN1_RX_M1 | AK25 | VCCIO6 1.8V | int PD |

### Питание (VDD_IN / VCC_SYS)

| P-Pin | SMARC Signal | Board Net / Function | RK3588 Ball | Voltage Domain | Notes |
| ----- | ------------ | -------------------- | ----------- | -------------- | ----- |
| P147 | VDD_IN | VCC_SYS | - | - | Power input (VCC_SYS) |
| P148 | VDD_IN | VCC_SYS | - | - | Power input (VCC_SYS) |
| P149 | VDD_IN | VCC_SYS | - | - | Power input (VCC_SYS) |
| P150 | VDD_IN | VCC_SYS | - | - | Power input (VCC_SYS) |
| P151 | VDD_IN | VCC_SYS | - | - | Power input (VCC_SYS) |
| P152 | VDD_IN | VCC_SYS | - | - | Power input (VCC_SYS) |
| P153 | VDD_IN | VCC_SYS | - | - | Power input (VCC_SYS) |
| P154 | VDD_IN | VCC_SYS | - | - | Power input (VCC_SYS) |
| P155 | VDD_IN | VCC_SYS | - | - | Power input (VCC_SYS) |
| P156 | VDD_IN | VCC_SYS | - | - | Power input (VCC_SYS) |

> Примечание: в PDF после P156 начинается таблица `S-Pin ... Secondary Side ...`. В рамках этого задания задокументированы только **P‑пины** (Primary Side).
