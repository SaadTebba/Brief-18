<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'brief-18' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '9)=hEyRhEvzt$WC/gjz6zCX$1[7xuY4bZ83Ye%.rhRIVX.S#<u_!!](:K<om:/Q>' );
define( 'SECURE_AUTH_KEY',  'OW}R{4I6^}y=p{`u9g#[=+[3F_~F3va6Y.ns`{AAdT*j4T>X;&YGB_rT742FE^Vg' );
define( 'LOGGED_IN_KEY',    'UvD}qK9R#P2}Vc|i)6ZX!~|+Y=HDm@}4^<y^/$m49 n=/i`_Q./(I_ASX|sG7)zq' );
define( 'NONCE_KEY',        '6t&wyTdr0Q#XAVfdmHo6Hp]qJb:lFQrXCY}CP?5s1GSdL#$gvsr0vA.W0f]J$%|@' );
define( 'AUTH_SALT',        'PV-D]<?apY.wFQ;Ske]QPeBih*39|[3v~rB*&!T,L[<J,6S5vDBg;3k_,obv2jXK' );
define( 'SECURE_AUTH_SALT', 'KbJ|4W<d[4>!(Tnp1%=%@9!Ln4LOG3vS/ltSV^6SMB_oVTp4_f3cNy[C/.K/Rtmg' );
define( 'LOGGED_IN_SALT',   'h%c1Uxp^~`r6.rEnZ+>h0:<#7~MGB8O-:[k92~Gux1;~`hRq9B7OZ[#LDd_hJBXZ' );
define( 'NONCE_SALT',       'Jy;)2[9S9C5?L5`nQY0$;H;Q%u>V<s6vYiXB^m7ra/<7I({l|emjC;>]vzZ,*)by' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
