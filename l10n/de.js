OC.L10N.register(
    "backup",
    {
    "Scan Backup Folder" : "Sicherungsordner durchsuchen",
    "Backup" : "Sicherung",
    "Update on all Backup's event" : "An allen Sicherungsterminen aktualisieren",
    "partial" : "teilweise",
    "seconds" : "Sekunden",
    "minutes" : "Minuten",
    "hours" : "Stunden",
    "days" : "Tage",
    "Your system have been fully restored based on a restoring point from {date} (estimated rewind: {rewind})" : "Dein System wurde vollständig wiederhergestellt, basierend auf einem Wiederherstellungspunkt von {date}. (geschätzter Rücksprung: {rewind})",
    "The file {file} have been restored based on a restoring point from {date} (estimated rewind: {rewind})" : "Die Datei {file} wurde basierend auf einem Wiederherstellungspunkt von {date} wiederhergestellt (geschätzter Rücklauf: {rewind})",
    "Backup now. Restore later." : "Jetzt sichern. Später wiederherstellen.",
    "The Backup App creates and stores backup images of your Nextcloud:\n\n      - Backup the instance, its apps, your data and your database,\n      - Administrator can configure the time slots for automated backup,\n      - Full and Partial backup, with different frequencies,\n      - 2-pass to limit downtime (maintenance mode) of your instance,\n      - Compression and encryption,\n      - Upload your encrypted backup on an external filesystem,\n      - Download and search for your data,\n      - Restore single file or the entire instance." : "Die Backup-App erstellt und speichert Backup-Images Deiner Nextcloud:\n\nSichere die Instanz, Deine Anwendungen, Deine Daten und Deine Datenbank,\n - Der Administror kann die Zeitfenster für die automatische Sicherung konfigurieren,\n- Voll- und Teil-Backup, mit unterschiedlicher Häufigkeit,\n- 2-pass zur Begrenzung der Ausfallzeit (Wartungsmodus) Deiner Instanz,\n- Komprimierung und Verschlüsselung,\n- Deine verschlüsselte Sicherung auf ein externes Dateisystem hochladen,\n - Download und Suche nach Deine Daten,\n - Wiederherstellung einzelner Dateien oder der gesamten Instanz",
    "App Data" : "App-Daten",
    "Choose where the backup app will initially store the restoring points." : "Wähle aus, wo die Backup-App die Wiederherstellungspunkte zunächst speichern soll.",
    "Set as App Data" : "Für App-Daten setzen",
    "Error" : "Fehler",
    "Changing the App Data will delete the data stored in the previous one including restoring points." : "Wenn Du die App-Daten änderst, werden die in der vorherigen App gespeicherten Daten einschließlich der Wiederherstellungspunkte gelöscht.",
    "I understand some data will be deleted." : "Ich verstehe, dass einige Daten gelöscht werden.",
    "Change the App Data" : "App-Daten ändern",
    "Local storage" : "Lokaler Speicher",
    "Unable to fetch app data" : "App-Daten können nicht geladen werden",
    "App data has been set" : "App-Daten wurden gesendet",
    "Unable to set app data" : "App-Daten können nicht gesetzt werden",
    "Restoring points locations" : "Orte der Wiederherstellungspunkte",
    "Manage available storage locations for storing restoring points" : "Verfügbare Speicherorte für die Speicherung von Wiederherstellungspunkten verwalten",
    "Add new external location" : "Neuen externen Ort hinzufügen",
    "External storage" : "Externer Speicher",
    "Restoring point location" : "Ort des Wiederherstellungspunktes",
    "Actions" : "Aktionen",
    "Delete" : "Löschen",
    "No external storage available" : "Kein externer Speicher vorhanden",
    "If you want to store your restoring points on an external location, configure an external storage in the \"External storage\" app." : "Wenn Du Deine Wiederherstellungspunkte an einem externen Ort speichern möchtest, konfiguriere einen externen Speicher in der App \"Externer Speicher\".",
    "No external locations set" : "Kein externer Ort konfiguriert",
    "You can add a new location with the above form." : "Du kannst mit dem obigen Formular einen neuen Ort hinzufügen.",
    "Unable to fetch external locations" : "Externe Orte können nicht geladen werden",
    "New external location added" : "Neuer externer Ort hinzugefügt",
    "Unable to save new external location" : "Externer Ort kann nicht gespeichert werden",
    "External location deleted" : "Externer Ort gelöscht",
    "Unable to delete the external location" : "Externer Ort kann nicht gelöscht werden",
    "Backups configuration" : "Sicherungen konfigurieren",
    "General configuration on how and when your restoring points are created." : "Allgemeine Konfiguration, wie und wann Deine Wiederherstellungspunkte erstellt werden.",
    "Backup schedule" : "Zeitplan der Sicherungen",
    "Create restoring points during the following time slot during the day:" : "Erstelle Wiederherstellungspunkte während des folgenden Zeitfensters am Tag:",
    "and" : "und",
    "Allow to create full restoring points during week day" : "Die Erstellung vollständiger Wiederherstellungspunkte während des Wochentags aktivieren",
    "Delay between two full restoring points" : "Abstand zwischen zwei vollen Wiederherstellungspunkten",
    "Delay between two partial restoring points" : "Abstand zwischen zwei teilweisen Wiederherstellungspunkten",
    "Restoring point packing" : "Komprimiere Wiederherstellungspunkt",
    "Enable restoring point packing" : "Komprimieren von Wiederherstellungspunkten aktivieren",
    "Enable encryption" : "Verschlüsselung aktivieren",
    "Enable compression" : "Komprimierung aktivieren",
    "Restoring point history" : "Historie des Wiederherstellungspunktes",
    "Number of restoring points to keep during a purge:" : "Anzahl der Wiederherstellungspunkte, die bei einer Bereinigung beibehalten werden sollen:",
    "In external storages" : "Auf externen Speichern",
    "Schedule summary" : "Zusammenfassung des Zeitplans",
    "A full restoring point will be created {delayFullRestoringPoint} days after the last one between {timeSlotsStart}:00 and {timeSlotsEnd}:00 any day of the week." : "Ein vollständiger Wiederherstellungspunkt wird {delayFullRestoringPoint} Tage nach dem letzten Wiederherstellungspunkt zwischen {timeSlotsStart}:00 und {timeSlotsEnd}:00 an einem beliebigen Wochentag erstellt.",
    "A full restoring point will be created {delayFullRestoringPoint} days after the last one between {timeSlotsStart}:00 and {timeSlotsEnd}:00 during weekends." : "Ein vollständiger Wiederherstellungspunkt wird {delayFullRestoringPoint} Tage nach dem letzten Wiederherstellungspunkt zwischen {timeSlotsStart}:00 und {timeSlotsEnd}:00 an Wochenenden erstellt.",
    "A partial restoring point will be created {delayPartialRestoringPoint} days after the last one between {timeSlotsStart}:00 and {timeSlotsEnd}:00 any day of the week." : "Ein teilweiser Wiederherstellungspunkt wird {delayFullRestoringPoint} Tage nach dem letzten Wiederherstellungspunkt zwischen {timeSlotsStart}:00 und {timeSlotsEnd}:00 an einem beliebigen Wochentag erstellt.",
    "Export backup configuration" : "Konfiguration der Sicherungen exportieren",
    "You can export your settings with the button below. The exported file is important as it allows you to restore your backup in case of full data lost. Keep it in a safe place!" : "Du kannst Deine Einstellungen über die unten stehende Schaltfläche exportieren. Die exportierte Datei ist wichtig, da sie es Dir ermöglicht, Dein Backup im Falle eines vollständigen Datenverlustes wiederherzustellen. Bewahre sie an einem sicheren Ort auf!",
    "Export configuration" : "Konfiguration exportieren",
    "Your settings export has been downloaded encrypted. To be able to decrypt it later, please keep the following private key in a safe place:" : "Deine Einstellungen wurde exportiert und verschlüsselt heruntergeladen. Um sie  später entschlüsseln zu können, bewahre bitte den folgenden privaten Schlüssel an einem sicheren Ort auf:",
    "Request the creation of a new restoring point now" : "Jetzt die Erstellung eines neuen Wiederherstellungspunktes anfordern",
    "Create full restoring point" : "Vollständigen Wiederherstellungspunkt erstellen",
    "Requesting a backup will put the server in maintenance mode." : "Durch die Anforderung einer Sicherung wird der Server in den Wartungsmodus gesetzt.",
    "I understand that the server will be put in maintenance mode." : "Ich verstehe, dass der Server in den Wartungsmodus gesetzt wird.",
    "Unable to fetch the settings" : "Einstellungen konnten nicht geladen werden",
    "Settings saved" : "Einstellungen gespeichert",
    "Unable to save the settings" : "Einstellungen können nicht gespeichert werden",
    "Unable to request restoring point" : "Wiederherstellungspunkt kann nicht angefordert werden",
    "Unable to export settings" : "Einstellungen könnnen nicht exportiert werden",
    "_day_::_days_" : ["Tag","Tage"],
    "Scheduled" : "geplant",
    "Pending" : "Ausstehend",
    "Not completed" : "Nicht fertiggestellt",
    "Completed" : "Fertiggestellt",
    "Not packed yet" : "Noch nicht gepackt",
    "Packed" : "Gepackt",
    "Encrypted" : "Verschlüsselt",
    "Compressed" : "Komprimiert",
    "Restoring points history" : "Historie der Wiederherstellungspunkte",
    "List of the past and future restoring points" : "Liste mit bisherigen und zukünftigen Wiederherstellungspunkten",
    "Issue" : "Anliegen",
    "Health" : "Gesundheit",
    "Status" : "Status",
    "Date" : "Datum",
    "ID" : "ID",
    "Local" : "Lokal",
    "local" : "lokal",
    "Next full restoring point" : "Nächster vollständiger Wiederherstellungspunkt",
    "Next partial restoring point" : "Nächster teilweiser Wiederherstellungspunkt",
    "Unable to fetch restoring points" : "Wiederherstellungspunkte können nicht geladen werden"
},
"nplurals=2; plural=(n != 1);");