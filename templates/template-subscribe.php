<?php
$optin_page = get_page_by_path('opt-in');
echo apply_filters('the_content', $optin_page->post_content);
