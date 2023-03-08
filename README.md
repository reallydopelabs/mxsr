# MXSR

The Ghost theme for [MAG X SAM RAPAPORT](https://mag.samrapaport.com).

## Development

### Local Installation
First, follow the official guide for getting Ghost running locally on your computer. [How to install Ghost locally.](https://ghost.org/docs/install/local/).

Next, you need to clone this repository and activate the theme. There are two options for this.

1. Clone the repository directly into the `content/themes` directory of your local Ghost installtion.
2. Clone this repository elsewhere and create a symbolic link to `content/themes/mxsr`.

In either case, the files in this repository should be sitting within the `content/themes/mxsr` directory of your local Ghost installation.

---

**Note:** All edits made to *existing* Ghost theme files will automatically reload. If you add any new files to your theme during development, you’ll need to restart Ghost to see the changes take effect.

---

Once you've placed the theme in the proper directory, you need to activate it. Head over to the ghost admin at [http://localhost:2368/ghost](http://localhost:2368/ghost) and set the active theme to mxsr in the [settings](http://localhost:2368/ghost/#/settings/design/change-theme).

You're now ready to make changes to the theme.

### Workflow
Within the theme folder, you can run `npm run dev` to watch files.
