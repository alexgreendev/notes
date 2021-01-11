SELECT pg_terminate_backend(pg_stat_activity.pid)
FROM pg_stat_activity
WHERE pid <> pg_backend_pid();

ALTER role postgres WITH password 'postgres';

DROP database if EXISTS note_service;
CREATE database note_service;
DROP role if EXISTS note_service;
CREATE role note_service WITH password 'password' LOGIN nocreatedb nocreaterole;
