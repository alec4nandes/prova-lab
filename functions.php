<?php

add_theme_support('title-tag');

add_theme_support('post-thumbnails');

add_image_size('rotating', 500, 500);

add_action('wp_enqueue_scripts', 'load_styles_and_scripts');

function load_styles_and_scripts()
{
    wp_enqueue_style('main-style', get_stylesheet_uri());

    wp_enqueue_style(
        'top-style',
        get_stylesheet_directory_uri() . '/css/top.css'
    );

    wp_enqueue_style(
        'landing-style',
        get_stylesheet_directory_uri() . '/css/landing.css'
    );

    wp_enqueue_style(
        'navbar-style',
        get_stylesheet_directory_uri() . '/css/navbar.css'
    );

    wp_enqueue_style(
        'page-style',
        get_stylesheet_directory_uri() . '/css/page.css'
    );

    wp_enqueue_style(
        'parallax-style',
        get_stylesheet_directory_uri() . '/css/parallax.css'
    );

    wp_enqueue_style(
        'rotating-style',
        get_stylesheet_directory_uri() . '/css/rotating.css'
    );

    wp_enqueue_style(
        'subscribe-style',
        get_stylesheet_directory_uri() . '/css/subscribe.css'
    );

    wp_enqueue_style(
        'contact-style',
        get_stylesheet_directory_uri() . '/css/contact.css'
    );

    wp_enqueue_style(
        'featured-image-side-style',
        get_stylesheet_directory_uri() . '/css/featured-image-side.css'
    );

    wp_enqueue_style(
        'error-404-style',
        get_stylesheet_directory_uri() . '/css/error-404.css'
    );

    wp_enqueue_script(
        'display-script',
        get_stylesheet_directory_uri() . '/scripts/display.js',
        [],
        0.1,
        true
    );

    wp_enqueue_script(
        'events-script',
        get_stylesheet_directory_uri() . '/scripts/events.js',
        [],
        0.1,
        true
    );
}

add_action('init', 'register_my_menus');

function register_my_menus()
{
    register_nav_menus([
        'navigation_menu' => 'Navigation Menu',
    ]);
}

// custom landing page options

add_action('customize_register', 'prova_new_customizer_settings');

function prova_new_customizer_settings($wp_customize)
{
    class Alec_Fernandes_Customize_Control_Section_Sorter extends WP_Customize_Control
    {
        public function render_content()
        {?>
            <label class="customize-control-title"><?php echo $this->label; ?></label>
            <?php foreach ($this->settings as $key => $value): ?>
				<select <?php echo $this->get_link($key) ?>>
				    <?php foreach ($this->choices as $id => $page): ?>
				        <option value="<?php echo $id; ?>"><?php echo $page; ?></option>
				    <?php endforeach;?>
                </select>
            <?php endforeach;
        }
    }

    $wp_customize->add_section('landing_settings', [
        'title' => 'Landing Page Settings',
        'description' =>
        'Settings for the landing page.',
    ]);

    $wp_customize->add_setting('landing_bg_image');
    $wp_customize->add_setting('landing_bg_color', ['default' => '#000000']);
    $wp_customize->add_setting('navbar_bg_color', ['default' => '#FFFFFF']);
    $wp_customize->add_setting('navbar_link_color', ['default' => '#000000']);
    $wp_customize->add_setting('landing_logo');
    $wp_customize->add_setting('landing_block_text_color');
    $wp_customize->add_setting('landing_block_text');
    $wp_customize->add_setting('landing_heading_color');

    function get_pages_array()
    {
        $result = ["0" => ''];
        foreach (get_pages() as $page) {
            $result[$page->ID] = $page->post_title;
        }
        return $result;
    }

    $pages_array = get_pages_array();

    $settings_array = [];

    for ($i = 1; $i <= count(get_pages()); $i++) {
        $name = 'landing_sections_' . $i;
        $wp_customize->add_setting($name, ['default' => "0"]);
        array_push($settings_array, $name);
    }

    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'landing_logo',
        [
            'label' => 'Landing Logo',
            'section' => 'landing_settings',
            'settings' => 'landing_logo',
        ]));
    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'landing_tagline_color',
        [
            'label' => 'Tagline Color',
            'section' => 'landing_settings',
            'settings' => 'landing_tagline_color',
        ]));
    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'landing_bg_color',
        [
            'label' => 'Background Color',
            'section' => 'landing_settings',
            'settings' => 'landing_bg_color',
        ]));
    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'navbar_bg_color',
        [
            'label' => 'Navigation Bar and Link Color',
            'section' => 'landing_settings',
            'settings' => 'navbar_bg_color',
        ]));
    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'navbar_link_color',
        [
            'label' => 'Navigation Bar Text Color',
            'section' => 'landing_settings',
            'settings' => 'navbar_link_color',
        ]));
    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'landing_bg_image',
        [
            'label' => 'Background Image',
            'section' => 'landing_settings',
            'settings' => 'landing_bg_image',
        ]));
    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'landing_block_text_color',
        [
            'label' => 'Block Text Color',
            'section' => 'landing_settings',
            'settings' => 'landing_block_text_color',
        ]));
    $wp_customize->add_control(new WP_Customize_Control($wp_customize, 'landing_block_text',
        [
            'label' => 'Block Text',
            'section' => 'landing_settings',
            'settings' => 'landing_block_text',
            'type' => 'textarea',
        ]));
    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'landing_heading_color',
        [
            'label' => 'Heading Color',
            'section' => 'landing_settings',
            'settings' => 'landing_heading_color',
        ]));
    $wp_customize->add_control(
        new Alec_Fernandes_Customize_Control_Section_Sorter($wp_customize, 'landing_sections',
            [
                'label' => 'Landing Sections',
                'section' => 'landing_settings', // Enter the name of your own section
                'settings' => $settings_array,
                'type' => 'select',
                'choices' => $pages_array,
            ]
        )
    );
}

// sidebars

add_action('widgets_init', 'register_my_sidebars');

function register_my_sidebars()
{
    register_sidebar([
        'name' => 'Navigation',
        'id' => 'navbar',
        'class' => 'navbar',
        'before_widget' => '<div>',
        'after_widget' => '</div>',
        'before_title' => '<h4>',
        'after_title' => '</h4>',
    ]);

    register_sidebar([
        'name' => 'Footer',
        'id' => 'footer',
        'class' => 'footer',
        'before_widget' => '<div>',
        'after_widget' => '</div>',
        'before_title' => '<h4>',
        'after_title' => '</h4>',
    ]);
}

// PROTECT API:
add_action('admin_menu', 'wpdocs_register_my_api_keys_page');
function wpdocs_register_my_api_keys_page()
{
    add_submenu_page(
        'tools.php',
        'API Keys',
        'API Keys',
        'manage_options',
        'api-keys',
        'add_api_keys_callback');
}

// The admin page containing the form
function add_api_keys_callback()
{?>
    <div class="wrap"><div id="icon-tools" class="icon32"></div>
        <h2>My API Keys Page</h2>
        <form action="<?php echo esc_url(admin_url('admin-post.php')); ?>" method="POST">
            <h3>Your Eventbrite API Key</h3>
            <input type="text" name="api_key" placeholder="Enter API Key">
            <input type="hidden" name="action" value="process_form">
            <input type="submit" name="submit" id="submit" class="update-button button button-primary" value="Update API Key"  />
        </form>
    </div>
    <?php
}

// Submit functionality
function submit_api_key()
{
    if (isset($_POST['api_key'])) {
        $api_key = sanitize_text_field($_POST['api_key']);
        $api_exists = get_option('api_key');
        if (!empty($api_key) && !empty($api_exists)) {
            update_option('api_key', $api_key);
        } else {
            add_option('api_key', $api_key);
        }
    }
    wp_redirect($_SERVER['HTTP_REFERER']);
}
add_action('admin_post_nopriv_process_form', 'submit_api_key');
add_action('admin_post_process_form', 'submit_api_key');