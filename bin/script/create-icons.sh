#!/bin/bash

# Android
convert icon.png -resize 36x36 www/res/icon/android/icon-36-ldpi.png
convert icon.png -resize 48x48 www/res/icon/android/icon-48-mdpi.png
convert icon.png -resize 72x72 www/res/icon/android/icon-72-hdpi.png
convert icon.png -resize 96x96 www/res/icon/android/icon-96-xdpi.png

# iOS (72-2x.png is the one locked onto for build.phonegap.com/app icon)
convert icon.png -resize 57x57   www/res/icon/ios/icon-57.png
convert icon.png -resize 114x114 www/res/icon/ios/icon-57-2x.png
convert icon.png -resize 72x72   www/res/icon/ios/icon-72.png
convert icon.png -resize 144x144 www/res/icon/ios/icon-72-2x.png

# Windows Phone
convert icon.png -resize 48x48   www/res/icon/windows-phone/icon-48.png
convert icon.png -resize 62x48   www/res/icon/windows-phone/icon-62.png
convert icon.png -resize 173x48  www/res/icon/windows-phone/icon-173.png



