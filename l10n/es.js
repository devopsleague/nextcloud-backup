OC.L10N.register(
    "backup",
    {
    "Scan Backup Folder" : "Escanear carpeta de respaldo",
    "Backup" : "Respaldo",
    "Update on all Backup's event" : "Actualización sobre todos los eventos de Respaldo",
    "complete" : "completo",
    "partial" : "parcial",
    "seconds" : "segundos",
    "minutes" : "minutos",
    "hours" : "horas",
    "days" : "días",
    "A new restoring point ({type}) has been generated, requiring maintenance mode for {downtime}." : "Se ha generado un nuevo punto de restauración ({type}), que requiere el modo de mantenimiento durante {downtime}.",
    "Your system have been fully restored based on a restoring point from {date} (estimated rewind: {rewind})" : "Su sistema se restauró por completo en base a un punto de restauración de {date} (rebobinado estimado: {rewind})",
    "The file {file} have been restored based on a restoring point from {date} (estimated rewind: {rewind})" : "El archivo {file} se ha restaurado en base a un punto de restauración de {date} (rebobinado estimado: {rewind})",
    "Backup now. Restore later." : "Respaldar ahora. Restaurar más tarde.",
    "The Backup App creates and stores backup images of your Nextcloud:\n\n      - Backup the instance, its apps, your data and your database,\n      - Administrator can configure the time slots for automated backup,\n      - Full and Partial backup, with different frequencies,\n      - 2-pass to limit downtime (maintenance mode) of your instance,\n      - Compression and encryption,\n      - Upload your encrypted backup on an external filesystem,\n      - Download and search for your data,\n      - Restore single file or the entire instance." : "La aplicación Respaldo crea y guarda imágenes de respaldo de tu Nextcloud:\n\n      - Respalda la instancia y sus aplicaciones, tus datos y base de datos,\n      - El administrador puede configurar las horas de respaldo automático,\n      - Respaldos completos y parciales, con diferentes frecuencias,\n      - 2-pases para limitar el tiempo de inactividad (modo de mantenimiento) de tu instancia,\n      - Compresión y encriptación,\n      - Sube tu respaldo encriptado a un sistema de archivos externo,\n      - Descarga y busca entre tus datos,\n      - Restaura archivos individuales o la instancia entera.subida",
    "App Data" : "Datos de la Aplicación",
    "Choose where the backup app will initially store the restoring points." : "Elige dónde debe guardar inicialmente los puntos de restauración la aplicación respaldo.",
    "Path in which to store the data. (ex: app_data)" : "Ruta donde se guardarán los datos. (ejemplo: app_data)",
    "Set as App Data" : "Establecer como Datos de la Aplicación",
    "Error" : "Error",
    "Changing the App Data will delete the data stored in the previous one including restoring points." : "Al cambiar los Datos de la Aplicación se borrarán los datos guardados en la ubicación anterior, incuyendo los puntos de restauración.",
    "I understand some data will be deleted." : "Entiendo que algunos datos serán eliminados.",
    "Change the App Data" : "Cambiar los Datos de la Aplicación",
    "Local storage" : "Almacenamiento local",
    "Unable to fetch app data" : "No se ha podido obtener datos de la aplicación",
    "App data has been set" : "Se ha establecido los Datos de la Aplicación",
    "Unable to set app data" : "No se ha establecido los Datos de la Aplicación",
    "Restoring points locations" : "Ubicación de los puntos de restauración",
    "Manage available storage locations for storing restoring points" : "Gestionar las ubicaciones de almacenamiento disponibles para guardar los puntos de restauración",
    "Path in which to store the restoring points. (ex: backups)" : "Ruta en la cual guardar los puntos de restauración. (ejemplo: backups)",
    "Add new external location" : "Añadir nueva ubicación externa",
    "External storage" : "Almacenamiento externo",
    "Restoring point location" : "Ubicación de un punto de restauración",
    "Actions" : "Acciones",
    "Delete" : "Eliminar",
    "No external storage available" : "No está disponible el almacenamiento externo",
    "If you want to store your restoring points on an external location, configure an external storage in the \"External storage\" app." : "Si quieres almacenar tus puntos de restauración en una ubicación externa, configura un almacenamiento externo en la aplicación \"Almacenamiento Externo\".",
    "No external locations set" : "No hay ubicaciones externas establecidas",
    "You can add a new location with the above form." : "Puedes añadir una nueva ubicación con el formulario de arriba.",
    "Unable to fetch external locations" : "No ha sido posible obtener las ubicaciones externas",
    "New external location added" : "Nueva ubicación externa añadida",
    "Unable to save new external location" : "No ha sido posible guardar la nueva ubicación externa",
    "External location deleted" : "Ubicación externa eliminada",
    "Unable to delete the external location" : "No ha sido posible eliminar la ubicación externa",
    "Backups configuration" : "Configuración de los respaldos",
    "General configuration on how and when your restoring points are created." : "Configuración general sobre cómo y cuándo se crean tus puntos de restauración.",
    "Backup schedule" : "Programación de respaldo",
    "Create restoring points during the following time slot during the day:" : "Crear puntos de restauración durante el siguiente rango de horas del día:",
    "and" : "y",
    "Allow to create full restoring points during week day" : "Permitir la creación de puntos de restauración completos en días laborables",
    "Delay between two full restoring points" : "Intervalo entre dos puntos de restauración completos",
    "Delay between two partial restoring points" : "Intervalo entre dos puntos de restauración parciales",
    "Restoring point packing" : "Empaquetado del punto de restauración",
    "Enable restoring point packing" : "Habilitar el empaquetado de los puntos de restauración",
    "Enable encryption" : "Permitir cifrado",
    "Enable compression" : "Permitir compresión",
    "Restoring point history" : "Historial de puntos de restauración",
    "Number of restoring points to keep during a purge:" : "Número de puntos de restauración a conservar durante una purga:",
    "In the local app data" : "En los datos de la aplicación local",
    "In external storages" : "En almacenamientos externos",
    "Schedule summary" : "Resumen de la programación",
    "A full restoring point will be created {delayFullRestoringPoint} days after the last one between {timeSlotsStart}:00 and {timeSlotsEnd}:00 any day of the week." : "Un punto de restauración completo se creará {delayFullRestoringPoint} días después del anterior entre las {timeSlotsStart}:00 y las {timeSlotsEnd}:00 en cualquier día de la semana.",
    "A full restoring point will be created {delayFullRestoringPoint} days after the last one between {timeSlotsStart}:00 and {timeSlotsEnd}:00 during weekends." : "Un punto de restauración completo se creará {delayFullRestoringPoint} días después del anterior entre las {timeSlotsStart}:00 y las {timeSlotsEnd}:00 durante el fin de semana.",
    "A partial restoring point will be created {delayPartialRestoringPoint} days after the last one between {timeSlotsStart}:00 and {timeSlotsEnd}:00 any day of the week." : "Un punto de restauración parcial se creará {delayPartialRestoringPoint} días después del anterior entre las {timeSlotsStart}:00 y las {timeSlotsEnd}:00 en cualquier día de la semana.",
    "Export backup configuration" : "Exportar configuración de respaldo",
    "You can export your settings with the button below. The exported file is important as it allows you to restore your backup in case of full data lost. Keep it in a safe place!" : "Puedes exportar tu configuración con el botón que hay a continuación. El archivo exportado es importante, puesto que te permite restaurar tu respaldo en caso de una pérdida de datos total. ¡Guárdalo a buen recaudo!",
    "Export configuration" : "Exportar la configuración",
    "Your settings export has been downloaded encrypted. To be able to decrypt it later, please keep the following private key in a safe place:" : "Tu configuración exportada ha sido descargada, pero está encriptada. Para poder desencriptarla en el futuro, guarda en un lugar seguro la siguiente clave privada:",
    "Request the creation of a new restoring point now" : "Solicitar la creación de un nuevo punto de restauración ahora",
    "The creation of a restoring point has been requested and will be initiated soon." : "La creación de un punto de restauración ha sido solicitada y comenzará pronto.",
    "Create full restoring point" : "Crear un punto de restauración completo",
    "Requesting a backup will put the server in maintenance mode." : "Solicitando un respaldo, el servidor pasará al modo de mantenimiento.",
    "I understand that the server will be put in maintenance mode." : "Entiendo que el servidor pasará al modo de mantenimiento.",
    "Request {mode} restoring point" : "Solicitar un punto de restauración {mode}",
    "Unable to fetch the settings" : "No se ha podido obtener la configuración",
    "Settings saved" : "Configuración guardada",
    "Unable to save the settings" : "No se ha podido guardar la configuración",
    "Unable to request restoring point" : "No se ha podido solicitar el punto de restauración",
    "Unable to export settings" : "No se ha podido exportar la configuración",
    "_day_::_days_" : ["día","días"],
    "Scheduled" : "Programado",
    "Pending" : "Pendiente",
    "Not completed" : "No completado",
    "Orphan" : "Huérfano",
    "Completed" : "Completado",
    "Not packed yet" : "Sin empaquetar aún",
    "Packed" : "Empaquetado",
    "Encrypted" : "Cifrado",
    "Compressed" : "Comprimido",
    "Restoring points history" : "Historial de puntos de restauración",
    "List of the past and future restoring points" : "Lista de los puntos de restauración pasados y futuros",
    "Issue" : "Problema",
    "Health" : "Salud",
    "Status" : "Estado",
    "Date" : "Fecha",
    "ID" : "ID",
    "No issue" : "Sin problema",
    "Local" : "Local",
    "local" : "local",
    "Next full restoring point" : "Siguiente punto de restauración completo",
    "Next partial restoring point" : "Siguiente punto de restauración parcial",
    "Unable to fetch restoring points" : "No se han podido obtener puntos de restauración"
},
"nplurals=2; plural=(n != 1);");