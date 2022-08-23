const enUS = {
  en: {
    translation: {
      global: {
        yes: "yes",
        no: "no",
        close: "close",
        save: "save",
        saving: "saving",
        removing: "removing",
        update: "update",
        updating: "updating",
        copy: "copy",
        copying: "copying",
        copied: "copied!",
        name: "Name",
        description: "Description",
        email: "Email",
        error: "Something went wrong. Please try again.",
        errorTitle: "Oops!",
        success: "Your changes have been saved.",
        successTitle: "Success!",
        mobile: "Mobile",
        desktop: "Desktop",
        tablet: "Tablet",
        i18n: {
          languages: "Change language",
          popover: {
            header: "Select your language",
          },
        },
        pagination: {
          currentPage: "Page",
          previousPage: "Previous page",
          nextPage: "Next page",
          totalPages: "Total pages:",
        },
        customize: "Customize",
        edit: "Edit",
      },
      premiumFeatures: {
        badgeText: "Premium feature",
        additionalText:
          "This feature is only available in the premium version. Become a premium member to unlock it.",
        upgradeCTA: {
          variant1: "Upgrade to premium",
          variant2: "Take a look at the features",
          variant3: "Unlock all the features",
          variant4: "Increase your sales",
        },
        modal: {
          title: "Exceed your limits",
          body: {
            newCountdown:
              "Unlock the premium version to create an unlimited number of timers: set a timer for each planned discount campaign or customize the timer look for your different landing pages.",
          },
        },
      },
      countdowns: {
        title: "Countdowns",
        table: {
          id: "ID",
          name: "Name",
          description: "Description",
          shortcode: "Shortcode",
          actions: "Actions",
          createdAt: "Created At",
          updatedAt: "Updated At",
        },
        firstCountdown: {
          header: "Welcome!",
          body: "You don't have any countdowns yet. Click the button below to create the first one.",
          buttonLabel: "Add your first countdown",
        },
      },
      countdown_edit_new: {
        buttonLabel: "New countdown",
        header: "New Countdown",
        namePlaceholder: "Name of the countdown",
        descriptionPlaceholder: "Description of the countdown",
        createSuccessTitle: "Countdown created",
        createSuccess: "Now you can edit the countdown.",
        openEditor: "Open editor",
      },
      countdown_edit_edit: {
        buttonLabel: "Update",
        header: "Update Information",
        updateSuccessTitle: "Countdown updated",
        updateSuccess: "Now you can edit the countdown.",
      },
      countdown_edit_delete: {
        header: "Are you absolutely sure?",
        body: "This will delete the countdown and all its data. This action cannot be undone.",
      },
      editor: {
        close: "Close editor",
        saveSettings: "Save settings",
        timezone: "Timezone",
        targetDate: "Target date",
        countdownStyle: "Countdown style",
        propertiesBar: {
          list: "Countodowns list",
          layout: "Choose layout",
          title: "Customize Title",
          timer: "Customize Timer Units",
          labels: "Customize Labels",
          separator: "Customize Separator",
        },
        propertiesGroup: {
          list: {
            groupTitle: "Countdowns List",
          },
          layout: {
            groupTitle: "Choose Layout",
            orientationLabelProp: "Choose orientation",
            gapLabelProp: "Gap between text and timer",
            stretchProp: "Fit the screen",
            transparentProp: "Transparent background",
            backgroundColorProp: "Background color",
            vertical: {
              title: "Vertical layout",
              description:
                "The title is on top of the countdown. This is choosed for small screens.",
              label: "Vertical",
            },
            horizontal: {
              title: "Horizontal layout",
              description:
                "The title is on the left of the countdown. This is choosed for large screens.",
              label: "Horizontal",
            },
          },
          title: {
            groupTitle: "Title style",
            titlePlaceholder: "Countown to New Year",
            text: "Text",
            textFont: "Text font",
            textSize: "Text size",
            textColor: "Text color",
          },
          separator: {
            groupTitle: "Separator style",
            showSeparatorLabel: "Show separator",
            showSeparatorAriaLabel: "Show the separator in the timer",
            separatorCharLabel: "Separator",
            separatorCharAriaLabel: "Define the separator character",
          },
          digits: {
            groupTitle: "Units style",
            unitsShown: "Units shown",
            lastUnitColor: "Last unit color",
            digitsFont: "Digits font",
            digitsSize: "Digits size",
            digitsColor: "Digits color",
          },
          digitLabel: {
            groupTitle: "Units label style",
            labelLanguage: "Label language",
            labelFont: "Label font",
            labelSize: "Label size",
            labelColor: "Label color",
          },
        },
        breakpointInfoMessage: {
          prefix: "This countdown will be displayed on ",
          mobile: "Mobile devices.",
          desktop: "Desktop devices.",
          tablet: "Tablet devices.",
        },
        preview: {
          tokenBadge: "Display size:",
          smallestDisplay: "Smallest display",
        },
      },
      onboarding: {
        title: "Welcome to Clockdown!",
        subtitle:
          "This is the first time you are using Clockdown. Register your account to get started.",
        buttonLabel: "Register",
        namePlaceholder: "Your name",
        emailPlaceholder: "Your best email",
        newsletterConsent:
          "I would like to sign up for your newsletter, but only if you promise not to bother me (approx. 1-2 per month). I am aware that I can unsubscribe whenever I choose.",
        privacyConsent:
          "I read the privacy policy. I am aware that you care about my privacy and will never share my data with anyone. This is the link to:",
        termsAndConditionsConsent:
          "Your terms and conditions are acceptable to me.",
        success: {
          title: "Thank you!",
          subtitle: "You are now registered.",
        },
        failed: {
          title: "Oops!",
          subtitle:
            "Sorry, something went wrong. Save your changes and we will try again later.",
        },
      },
    },
  },
};

export default enUS;
