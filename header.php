<?php include_once "php/events.php";?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script>
        const eventsData = <?php echo $events_data; ?>,
            categoryIDs = <?php echo $category_ids; ?>;
    </script>
    <style>
        a:not(.custom-button), .subscribe-autofocus-link {
            color: <?php echo get_theme_mod('navbar_bg_color'); ?>;
        }

        a:not(.custom-button):hover, .subscribe-autofocus-link:hover {
            color: <?php echo get_theme_mod('landing_heading_color'); ?>;
        }

        .event-info .date {
            color: <?php echo get_theme_mod('landing_heading_color'); ?>;
        }

        .navbar li a:hover, .custom-button:hover {
            background-color: <?php echo get_theme_mod('landing_heading_color'); ?> !important;
            color: <?php echo get_theme_mod('navbar_link_color'); ?> !important;
        }

        .navbar a, .custom-button {
            color: <?php echo get_theme_mod('navbar_link_color'); ?> !important;
        }

        .navbar, #top .navbar ul, .navbar li, .custom-button {
            background-color: <?php echo get_theme_mod('navbar_bg_color'); ?> !important;
        }

        #landing .columns {
            border-bottom: 5px solid <?php echo get_theme_mod('navbar_bg_color'); ?>;
        }

        #landing section:not(#top) {
            border-bottom: 5px solid <?php echo get_theme_mod('navbar_bg_color'); ?>;
        }

        hr,
        body:not(.page-template-template-page-parallax-full-width):not(.page-template-template-page-rotating-left):not(.page-template-template-page-rotating-right) .feature-image-side {
            background-color: <?php echo get_theme_mod('landing_heading_color'); ?>;
        }

        .section-title {
            color: <?php echo get_theme_mod('landing_heading_color'); ?>;
        }

        footer {
            background-color: <?php echo get_theme_mod('landing_heading_color'); ?>;
            color: <?php echo get_theme_mod('navbar_link_color'); ?>;
        }

        /* contact form color */

        .custom-contact input,
        .custom-contact textarea {
            color: <?php echo get_theme_mod('landing_heading_color'); ?> !important;
        }

        /* subscribe color */

        .subscribe input[type="submit"],
        .subscribe input[type="email"],
        .subscribe input[type="email"]::placeholder {
            color: <?php echo get_theme_mod('navbar_link_color'); ?> !important;
        }

        .subscribe input[type="email"]::placeholder {
            opacity: 0.6;
        }

        .subscribe input[type="submit"] {
            background-color: <?php echo get_theme_mod('navbar_link_color'); ?> !important;
            color: <?php echo get_theme_mod('navbar_bg_color'); ?> !important;
        }

        .subscribe input[type="email"] {
            border-bottom: 1px solid <?php echo get_theme_mod('navbar_link_color'); ?> !important;
        }

        .subscribe input[type="submit"]:hover {
            background-color: <?php echo get_theme_mod('landing_heading_color'); ?> !important;
            color: <?php echo get_theme_mod('navbar_link_color'); ?> !important;
        }

    </style>
    <?php wp_head();?>
</head>
<!-- hidden while correctly positioning parallax elements -->
<body <?php body_class();?> style="visibility: hidden;">
