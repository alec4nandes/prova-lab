<?php

function getData($url)
{
    // Initialize a CURL session.
    $ch = curl_init();

    // Return Page contents.
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

    //grab URL and pass it to the variable.
    curl_setopt($ch, CURLOPT_URL, $url);

    $result = json_decode(curl_exec($ch));

    return $result;
}

function eventbriteData()
{
    $token = get_option('api_key');

    $data_url = "https://www.eventbriteapi.com/v3/organizers/33834574653/events/?token=" . $token;

    $events_data = getData($data_url);

    $category_ids = [];

    foreach ($events_data->events as $event) {
        echo $category_ids[$event->category_id] = "";
    }

    foreach (array_keys($category_ids) as $id) {
        $category_ids[$id] =
        getData("https://www.eventbriteapi.com/v3/categories/" . $id . "/?token=" . $token)->name;
    }

    return ['data' => $events_data, 'ids' => $category_ids];
}

// only get data on pages with events (Events and Education as of 6/10/22)
$page_id = get_the_ID();

$eb_data = $page_id === 160 || $page_id === 147 ? eventbriteData() : null;

$category_ids = json_encode($eb_data ? $eb_data['ids'] : []);

$events_data = json_encode($eb_data ? $eb_data['data'] : []);
