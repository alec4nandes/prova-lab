<div class="parallax"
    style="background-image: url('<?php echo $args['bg_url']; ?>');
        <?php
        $bg_position_x = get_post_meta($args['id'], 'bg_position_x', true/* single */);
        if($bg_position_x) {
            echo 'background-position-x: ' . $bg_position_x . ';';
        }
        ?>
    ">
