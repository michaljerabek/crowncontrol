# BracketsCrown — Logitech Crown (Craft) integration for Brackets

*Probably won't work on macOS.*

## Installation instructions

**This is not an official way to install custom plugin for Logitech Options. But it works.** 

After you have installed the extention:

1. Open Logitech Options and select your keyboard (Craft).
2. Click on `All Applications` and select `Brackets`.
3. Click on `More` > `Software` and enable `Developer Mode`.
4. Open folder with extentions for Brackets (`Help` > `Show Extenstions Folder`).
5. Copy `9df01287-806d-4292-9ee4-2c6e477fee55` folder to `C:\ProgramData\Logishrd\LogiOptionsPlugins` (folder `LogiOptionsPlugins` have to be created).
6. Go to `C:\Users\[YOUR_ACCOUNT]\AppData\Roaming\Logishrd\LogiOptions`.
7. Open `apptable.xml` and find `<profile/>` for Brackets.
8. Change `<id/>` to `9df01287-806d-4292-9ee4-2c6e477fee55`. (If there are other profiles for Brackets, remove them.)
9. Copy `9df01287-806d-4292-9ee4-2c6e477fee55.xml` from the extention folder to `C:\Users\[YOUR_ACCOUNT]\AppData\Roaming\Logishrd\LogiOptions\devices\6b350\Profiles`.
10. Kill all processes in Task Manager related to Logitech Options and close Brackets (or restart your computer).
11. Run Logitech Options and Brackets.

On macOS you can use official method, but it may not work (it didn't work for me, but I tried that only in VirtualBox):

1. Copy `9df01287-806d-4292-9ee4-2c6e477fee55` folder from the extenstion folder to `~/Library/Application Support/Logitech/Logitech Options/Plugins`.
2. Enable `Developer Mode` in Logitech Options (`Logitech Options` > `Craft` > `More` > `Software`).
3. Click on `All Applications` and install the profile.
4. Click on `All Applications` > `Brackets` and then `Crown` > `Press` and set it to `F9`.
5. Try it and if it works, let me know.

## What you can do with this

*I'm currently trying to figure out what could be useful so there is no guarantee it will work the same in future versions.*

*You have to learn to use it, but if you do that, controlling Brackets only from keyboard should be easier.*

### Press (Crown)
Switches currently active pane or turns on *Split View*.
- `CTRL` — switches horizontal/vertical mode
- `CTRL` + `SHIFT` — turns off *Split View*
- `CTRL` + `ALT` — switches active pane and its size

*It requires F9 and F9 + Modifier keys shortcuts to be available.*

### Turn: Default context

Available options:

1. Horizontal scroll (active pane)
    - `SHIFT` — vertical scroll
    - `CTRL` — faster scroll
    - `ALT` — inactive pane
2. Vertical scroll (active pane)
    - `SHIFT` — horizontal scroll
    - `CTRL` — faster scroll
    - `ALT` — inactive pane
3. Open next / previous file (active pane)
    - `CTRL` — instantly opens next / previous file
    - `ALT` — inactive pane
4. Horizontal scroll — inactive pane
    - `SHIFT` — vertical scroll
    - `CTRL` — faster scroll
    - `ALT` — active pane
5. Vertical scroll — inactive pane
    - `SHIFT` — horizontal scroll
    - `CTRL` — faster scroll
    - `ALT` — active pane
6. Resize panes

### Turn: Numbers

If the cursor(s) is on any number, you can increase or decrease it by a value based on the context (unit). (I'm not sure if this is a good thing.) Available options:

1. Increment/Decrement number — use ratchet
2. Increment/Decrement number — do not use ratchet
3. Increment/Decrement number in opposite directions — use ratchet
4. Increment/Decrement number in opposite directions — do not use ratchet


- `CTRL` — default value * 10
- `SHIFT` — default value * 100
- `CTRL` + `SHIFT` — default value * 1000
- `ALT` — default value / 10
- `CTRL` + `ALT` — default value / 100
- `ALT` + `SHIFT` — default value / 1000
- `CTRL` + `ALT` + `SHIFT` — default value / 10000


*In opposite directions* means that *turning to the right* increases positive numbers and decreases negative numbers (and vice versa). What is it good for? For example:

```
/* CSS triangle */
div::after {
    content: "";
    
    position: absolute;
    bottom: 100%;
    left: 50%;
    
    martin-left: -10px;
    
    border: 10px solid;
    border-color: transparent transparent white transparent;
}
/* You can select 10px and -10px values and resize the triangle 
 * by turning the Crown. If you increase the border to 12px, 
 * the margin will be -12px (and not -8px), so the triangle 
 * will always be in the center.
 */
```

### Turn: Colors

If the cursor(s) is on any color, you can change its hue, saturation, lightness or alpha value. The cursor has to be on non-number part of the color definition (except colors in HEX format). Available options:

1. Hue
2. Saturation
3. Lightness
4. Alpha

By default Hue, Saturation and Lightness increase or decrease value by 5 and Alpha by 0.05. 

- `CTRL` — larger step (HSL: 10, A: 0.1)
- `SHIFT` — even larger step (HSL: 20, A: 0.2)
- `ALT` — smaller step (HSL: 1, A: 0.01)
- `CTRL + ALT` — even smaller step (HSL: Magic numbers, A: 0.001)
- `CTRL + ALT + SHIFT` — even smaller step for Saturation and Lightness (0.2)
---
**Tip: ALT-GR (right ALT) works the same as left ALT, so you can use right ALT, CTRL and SHIFT keys.**