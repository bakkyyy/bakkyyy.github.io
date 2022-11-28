<?
$file = 'file/result.txt';

if (isset($_REQUEST['time']))
{
    if (empty($_REQUEST['name']))
        $name = 'Неизвестный';
    else
        $name = $_REQUEST['name'];

    $current = file_get_contents($file);
    
    //$time = microtime(true);
    //$micro = sprintf("%06d",($time - floor($time)) * 1000000);
    //$date = new DateTime( date('Y-m-d H:i:s.'.$micro, $time) );

    //$current .= $name . ' - ' . $date->format("H:i:s.u") . PHP_EOL;
    $current .= $name . PHP_EOL;
    $tmp = file_put_contents($file, $current);
    echo 'add';
}

if (isset($_REQUEST['action']) && $_REQUEST['action'] == 'clear')
{
    file_put_contents($file, '');
    echo 'clear';
}
