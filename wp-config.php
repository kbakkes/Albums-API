<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', '0912071');

/** MySQL database username */
define('DB_USER', '0912071');

/** MySQL database password */
define('DB_PASSWORD', 'iuqueequ');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'NKL2Ol-CZCvKXoUJ$DN>zy2HLVdq#Kb((zF Ms2)i{}0vtd}@. cV|AHr=)Q3~PD');
define('SECURE_AUTH_KEY',  'z0urPx%p`gV+0&s<dB?~FHJ^8w&1Sr<_^ZFuc20%P1gt&yF3Ny08e@[/Z KRK0sJ');
define('LOGGED_IN_KEY',    '81*Bo+.-6hbF4{%v][>6)Sm0fX~dv#uau?R<]{+xP_vO.SGsNF) yj;x<+ayp/lV');
define('NONCE_KEY',        '#*f5|h{l-Nzj/!ny1EiC$vP HOlhGTDxjYd@rX^L{q%;?R;d3Iu0H8S$n*d-3tey');
define('AUTH_SALT',        'q QZzyMW&yMqzdI.+p}(u,Z)91**v8neqV/5- JHZULN~={y!dT&aBZP2K<0g,B,');
define('SECURE_AUTH_SALT', '$2df6BTY0WrTN#A)ATZ:Nw,5*Ey4M-Mcr7iSYO(Taz7^4@6B)#Lx8O#U|O!Uc%_r');
define('LOGGED_IN_SALT',   ']Q+@.NfKoxii1XmSAiZ-mWjYG2=>_0;a*!`ozbYB|5v!p+t-X=4>n(F_|l]f%$;x');
define('NONCE_SALT',       'PyHK^:][!3a85DvI_+zaaRMxsmfLS){F)uCqX|3p9rvL^DDaBrMG4DhiG(m1CFBg');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

