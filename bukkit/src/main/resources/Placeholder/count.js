/*******************************************************************************
 *     Copyright (C) 2019 Pro_Snape
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *******************************************************************************/
var itemStackType = Java.type("org.bukkit.inventory.ItemStack");
validation = {
    "overloads": [
        [{"name": "item", "type": itemStackType.class}]

    ]
}

function count(args) {
    if (overloads === 0) {
        var item = args[0];
        var Material = Java.type("org.bukkit.Material")
        if (item === null || item.getType() === Material.AIR)
            return 0;


        return item.getAmount();
    }

}