<?php
$landing_bg_color = get_theme_mod('landing_bg_color');
$landing_bg_image = get_theme_mod('landing_bg_image');
?>

<section id="top"
    class="parallax"
    style="<?php
echo 'background-color: ' . $landing_bg_color .
'; background-image: url(' . $landing_bg_image . ');' ?>">
        <div id="top-section-content">
            <div id="content-wrapper">
                <img id="landing-logo" src="<?php echo get_theme_mod('landing_logo'); ?>"
                    alt="homepage logo for Prova Lab" />
                <div id="block-quote"
                    class="hidden"
                    style="color: <?php echo get_theme_mod('landing_block_text_color'); ?>">
                    <p><?php echo get_theme_mod('landing_block_text'); ?></p>
                </div>
            </div>
        </div>
    </div>
</section>