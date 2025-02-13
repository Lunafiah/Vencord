/*
 * Vencord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { findOption, OptionalMessageOption } from "@api/Commands";
import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "MoreKaomoji",
    description: "Adds more Kaomoji to discord. ヽ(´▽`)/",
    authors: [Devs.JacobTm],
    commands: [
        { name: "dissatisfaction", description: " ＞﹏＜" },
        { name: "smug", description: "ಠ_ಠ" },
        { name: "happy", description: "ヽ(´▽`)/" },
        { name: "crying", description: "ಥ_ಥ" },
        { name: "angry", description: "ヽ(｀Д´)ﾉ" },
        { name: "anger", description: "ヽ(ｏ`皿′ｏ)ﾉ" },
        { name: "joy", description: "<(￣︶￣)>" },
        { name: "blush", description: "૮ ˶ᵔ ᵕ ᵔ˶ ა" },
        { name: "confused", description: "(•ิ_•ิ)?" },
        { name: "sleeping", description: "(ᴗ_ᴗ)" },
        { name: "laughing", description: "o(≧▽≦)o" },
        { name: "shy", description: "(⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄)" },
        { name: "love", description: "(♡‿♡)" },
        { name: "excited", description: "⸜(｡˃ ᵕ ˂ )⸝" },
        { name: "shock", description: "(⊙_⊙)" },
        { name: "table flip", description: "(ノಠ益ಠ)ノ彡┻━┻" },
        { name: "unamused", description: "(-_-)" },
        { name: "worried", description: "(๑•﹏•)" },
        { name: "meh", description: "¯\\_(ツ)_/¯" },
        { name: "thinking", description: "(ಠ‿ಠ)" },
        { name: "celebrating", description: "ヽ(⌐■_■)ノ♪" },
        { name: "cat", description: "(=^･ω･^=)" },
        { name: "dog", description: "U・ᴥ・U" },
        { name: "wink", description: "(^_~)" },
        { name: "scared", description: "(⊙﹏⊙✿)" },
        { name: "nervous", description: "(๑•́ ₃ •̀๑)" },
        { name: "determined", description: "(ง •̀_•́)ง" },
        { name: "pouting", description: "(￣ε(#￣)☆╰╮(￣▽￣///)" },
        { name: "hug", description: "(づ｡◕‿‿◕｡)づ" },
    
    ].map(data => ({
        ...data,
        options: [OptionalMessageOption],
        execute: opts => ({
            content: findOption(opts, "message", "") + " " + data.description
        })
    }))
});
