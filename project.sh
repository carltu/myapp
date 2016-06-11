#!/bin/bash

# ----
# Text Colors and Messaging Functions

textReset=$(tput sgr0)
textRed=$(tput setaf 1)
textGreen=$(tput setaf 2)
textYellow=$(tput setaf 3)

message_info () {
  echo "$textGreen[project]$textReset $1"
}
message_warn () {
  echo "$textYellow[project]$textReset $1"
}
message_error () {
  echo "$textRed[project]$textReset $1"
}

# ----
# Help Output

show_help () {
  echo ""
  message_info "This script performs the necessary command-line operations for this app."
  message_info ""
  message_info "The following options are available:"
  message_info ""
  message_info "    -c (--clean): Removes generated directories and content. Combine with -i."
  message_info "    -h (--help): Displays this help message."
  message_info "    -i (--init): Runs all operations necessary for initialization."
  message_info "    -m (--merge): Merges content of 'platform-merges' with 'platform'."
  message_info "    -n (--icons): Copies icon and splash screen images to platform directories."
  message_info "    -p (--plugins): (Re)Installs all plugins."
  message_info "    -u (--update): Update platform codebase, runs ‘phonegap prepare'."
  message_info ""
  message_info "Examples:"
  message_info ""
  message_info "    ./project.sh   # This is the same as using the -i option."
  message_info "    ./project.sh -c -i"
  echo ""
}

# ----
# Script Option Parsing

init=0;
merge=0;
plugins=0;
icons=0;
clean=0;
update=0;
scripts=0;

while :; do
  case $1 in
    -h | --help | -\?)
      show_help
      exit 0
      ;;
    -i | --init)
      init=1
      ;;
    -m | --merge)
      merge=1
      ;;
    -p | --plugins)
      plugins=1
      ;;
    -n | --icons)
      icons=1
      ;;
    -c | --clean)
      clean=1
      ;;
    -s | --scripts)
      scripts=1
      ;;
    -u | --update)
      update=1
      ;;
    --) # End of all options
      break
      ;;
    -*)
      echo ""
      message_error "WARN: Unknown option (ignored): $1"
      show_help
      exit 1
      ;;
    *)  # no more options. Stop while loop
      break
      ;;
  esac
  shift
done

if [[ $merge = 0 ]] && [[ $plugins = 0 ]] && [[ $icons = 0 ]] && [[ $clean = 0 ]] && [[ $update = 0 ]] ; then
  # If no options specified then we're doing initialization.
  init=1
fi

# ----
# Initial Scripts

if [[ $scripts = 1 ]] ; then
  message_info "Installing node plugins"
  npm install

  message_info "Installing bower plugins"
  bower install
fi

# ----
# Clean

if [[ $clean = 1 ]] ; then
  if [[ -d "plugins" ]] ; then
    message_info "Removing 'plugins' directory."
    rm -rf plugins
  fi

  if [[ -d "platforms" ]] ; then
    message_info "Removing 'platforms' directory."
    rm -rf platforms
  fi
fi

if [[ $merge = 0 ]] && [[ $plugins = 0 ]] && [[ $icons = 0 ]] && [[ $init = 0 ]] && [[ $update = 0 ]] ; then
  exit 0
fi

# ----
# Make sure necessary directories exist, regardless of options.

if [[ ! -d "plugins" ]] ; then
  message_info "Creating 'plugins' directory."
  mkdir plugins
fi

if [[ ! -d "platforms" ]] ; then
  message_info "Creating 'platforms' directory."
  mkdir platforms
fi

# ----
# Copy App Icons and Splash Screen Images

if [[ $init = 1 ]] || [[ $icons = 1 ]] ; then
  # This would probably be better if we parsed www/config.xml,
  # but for now we know the files and where they need to go.

  message_info "Copying Android app icons and splash screen images..."
  cp www/res/icon/android/icon-36-ldpi.png platforms/android/res/drawable-ldpi/icon.png
  cp www/res/icon/android/icon-48-mdpi.png platforms/android/res/drawable-mdpi/icon.png
  cp www/res/icon/android/icon-72-hdpi.png platforms/android/res/drawable-hdpi/icon.png
  cp www/res/icon/android/icon-96-xhdpi.png platforms/android/res/drawable-xhdpi/icon.png
  cp www/res/icon/android/icon-96-xhdpi.png platforms/android/res/drawable/icon.png

  #cp www/res/screen/android/screen-ldpi-portrait.png platforms/android/res/drawable-ldpi/splash.png
  #cp www/res/screen/android/screen-mdpi-portrait.png platforms/android/res/drawable-mdpi/splash.png
  #cp www/res/screen/android/screen-hdpi-portrait.png platforms/android/res/drawable-hdpi/splash.png
  #cp www/res/screen/android/screen-xhdpi-portrait.png platforms/android/res/drawable-xhdpi/splash.png
  cp www/res/screen/android/screen-xhdpi-portrait.png platforms/android/res/drawable/splash.png

  message_info "Copying iOS app icons and splash screen images..."
  cp www/res/icon/ios/icon-40.png platforms/ios/SupplyPro/Resources/icons/icon-40.png
  cp www/res/icon/ios/icon-40@2x.png platforms/ios/SupplyPro/Resources/icons/icon-40@2x.png
  cp www/res/icon/ios/icon-50.png platforms/ios/SupplyPro/Resources/icons/icon-50.png
  cp www/res/icon/ios/icon-50@2x.png platforms/ios/SupplyPro/Resources/icons/icon-50@2x.png
  cp www/res/icon/ios/icon-60.png platforms/ios/SupplyPro/Resources/icons/icon-60.png
  cp www/res/icon/ios/icon-60@2x.png platforms/ios/SupplyPro/Resources/icons/icon-60@2x.png
  cp www/res/icon/ios/icon-72.png platforms/ios/SupplyPro/Resources/icons/icon-72.png
  cp www/res/icon/ios/icon-72@2x.png platforms/ios/SupplyPro/Resources/icons/icon-72@2x.png
  cp www/res/icon/ios/icon-76.png platforms/ios/SupplyPro/Resources/icons/icon-76.png
  cp www/res/icon/ios/icon-76@2x.png platforms/ios/SupplyPro/Resources/icons/icon-76@2x.png
  cp www/res/icon/ios/icon-small.png platforms/ios/SupplyPro/Resources/icons/icon-small.png
  cp www/res/icon/ios/icon-small@2x.png platforms/ios/SupplyPro/Resources/icons/icon-small@2x.png
  cp www/res/icon/ios/icon.png platforms/ios/SupplyPro/Resources/icons/icon.png
  cp www/res/icon/ios/icon@2x.png platforms/ios/SupplyPro/Resources/icons/icon@2x.png
  
  
  cp www/res/screen/ios/screen-iphone-portrait.png platforms/ios/SupplyPro/Resources/splash/Default~iphone.png
  cp www/res/screen/ios/screen-iphone-portrait-2x.png platforms/ios/SupplyPro/Resources/splash/Default@2x~iphone.png
  cp www/res/screen/ios/screen-iphone-portrait-568h-2x.png platforms/ios/SupplyPro/Resources/splash/Default-568h@2x~iphone.png
fi

# ----
# Add Plugins

if [[ $init = 1 ]] || [[ $plugins = 1 ]] ; then

  # Device - https://github.com/apache/cordova-plugin-device
  message_info "Removing Device Plugin..."
  cordova plugin remove org.apache.cordova.device
  
  message_info "Adding Device Plugin..."
  cordova plugin add org.apache.cordova.device@0.2.10
  
  
  # Dialogs - https://github.com/apache/cordova-plugin-dialog
  message_info "Removing Dialog Plugin..."
  cordova plugin remove org.apache.cordova.dialogs
  
  message_info "Adding Dialog Plugin..."
  cordova plugin add org.apache.cordova.dialogs@0.2.8
  
  # InAppBrowser - https://github.com/apache/cordova-plugin-inappbrowser
  message_info "Removing In-app Browser Plugin..."
  cordova plugin remove org.apache.cordova.inappbrowser
  
  message_info "Adding In-app Browser Plugin..."
  cordova plugin add org.apache.cordova.inappbrowser@0.5.0
  
  # File - https://github.com/apache/cordova-plugin-file
  message_info "Removing File Plugin..."
  cordova plugin remove org.apache.cordova.file
	
  message_info "Adding File Plugin..."
  cordova plugin add org.apache.cordova.file@1.3.1
	 
  # FileTransfer - https://github.com/apache/cordova-plugin-file-transfer
  message_info "Removing File Transfer Plugin..."
  cordova plugin remove org.apache.cordova.file-transfer
	
  message_info "Adding File Transfer Plugin..."
  cordova plugin add org.apache.cordova.file-transfer@0.4.7
      
  # Network - https://github.com/apache/cordova-plugin-network-information
  message_info "Removing Network Plugin..."
  cordova plugin remove org.apache.cordova.network-information
  
  message_info "Adding Network Plugin..."
  cordova plugin add org.apache.cordova.network-information@0.2.10
  
  
  # Statusbar - https://github.com/apache/cordova-plugin-statusbar
  message_info "Removing Statusbar Plugin..."
  cordova plugin remove org.apache.cordova.statusbar

  message_info "Adding Statusbar Plugin..."
  cordova plugin add org.apache.cordova.statusbar@0.1.7
  
  
  # App Version - https://github.com/whiteoctober/cordova-plugin-app-version
  message_info "Removing App Version Plugin..."
  cordova plugin remove uk.co.whiteoctober.cordova.AppVersion
  
  message_info "Adding App Version Plugin..."
  cordova plugin add https://github.com/whiteoctober/cordova-plugin-app-version.git
  
  
  # Diagnostic - https://github.com/mablack/cordova-diagnostic-plugin
  message_info "Removing Diagnostic Plugin..."
  cordova plugin remove cordova.plugins.diagnostic
  
  message_info "Adding Diagnostic Plugin..."
  cordova plugin add https://github.com/mablack/cordova-diagnostic-plugin
fi

# ----
# Add platforms

if [[ $init = 1 ]] ; then
  message_info "Adding Android platform..."
  cordova platform add android

  message_info "Adding iOS platform..."
  cordova platform add ios
fi

# ----
# Merge platform overrides.

if [[ $init = 1 ]] || [[ $merge = 1 ]] ; then
  message_info "Merging Android platform customizations..."
  cp -R platform-merges/android/* platforms/android/

  message_info "Merging iOS platform customizations..."
  cp -R platform-merges/ios/* platforms/ios/
fi

