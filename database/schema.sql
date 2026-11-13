CREATE TABLE IF NOT EXISTS tarefas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    materia TEXT NOT NULL,
    descricao TEXT,
    data_entrega TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'Pendente'
        CHECK (status IN ('Pendente', 'Concluída'))
);
