<?php
// Import all config changes.
echo "Importing configuration from yml files...\n";
passthru('drush config-import -y');
echo "Import of configuration complete.\n";
//Clear all cache
echo "Rebuilding cache.\n";
passthru('drush cr');
echo "Rebuilding cache complete.\n";
echo "Import of configuration complete.\n";
// Update db
echo "Updating database.\n";
passthru('drush updatedb -y');
echo "Database update complete.\n";