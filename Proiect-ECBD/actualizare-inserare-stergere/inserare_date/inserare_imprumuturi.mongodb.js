use('proiect');
db.createCollection('imprumuturi');

use('proiect');
db.getCollection('imprumuturi').insertMany([
    {
        "id_utilizator":110,
        "id_carte":"9786067761849",
        "data_imprumut":new Date("2023-10-11"),
        "data_scadenta":new Date("2023-10-25"),
        "data_returnare":new Date("2023-10-21")
    },
    {
        "id_utilizator":110,
        "id_carte":"9786066098656",
        "data_imprumut":new Date("2023-06-15"),
        "data_scadenta":new Date("2023-06-29"),
        "data_returnare":new Date("2023-07-03")
    },
    {
        "id_utilizator":110,
        "id_carte":"9786063373107",
        "data_imprumut":new Date("2024-05-15"),
        "data_scadenta":new Date("2024-05-29"),
        "data_returnare":null
    },
    {
        "id_utilizator":111,
        "id_carte":"9786066096133",
        "data_imprumut":new Date("2024-03-05"),
        "data_scadenta":new Date("2024-03-19"),
        "data_returnare":new Date("2024-03-18")
    },
    {
        "id_utilizator":111,
        "id_carte":"9786067107173",
        "data_imprumut":new Date("2024-03-18"),
        "data_scadenta":new Date("2024-04-01"),
        "data_returnare":new Date("2024-03-28")
    },
    {
        "id_utilizator":111,
        "id_carte":"9780451524935",
        "data_imprumut":new Date("2024-04-03"),
        "data_scadenta":new Date("2024-04-17"),
        "data_returnare":new Date("2024-04-16")
    },
    {
        "id_utilizator":111,
        "id_carte":"9786060863908",
        "data_imprumut":new Date("2024-05-19"),
        "data_scadenta":new Date("2024-06-02"),
        "data_returnare":null
    },
    {
        "id_utilizator":112,
        "id_carte":"9786066096133",
        "data_imprumut":new Date("2022-09-05"),
        "data_scadenta":new Date("2022-09-19"),
        "data_returnare":new Date("2022-09-18")
    },
    {
        "id_utilizator":112,
        "id_carte":"9786063373107",
        "data_imprumut":new Date("2023-06-08"),
        "data_scadenta":new Date("2023-06-22"),
        "data_returnare":new Date("2023-06-18")
    },
    {
        "id_utilizator":112,
        "id_carte":"9786303210315",
        "data_imprumut":new Date("2023-11-10"),
        "data_scadenta":new Date("2023-11-24"),
        "data_returnare":new Date("2023-11-23")
    },
    {
        "id_utilizator":112,
        "id_carte":"9786060865988",
        "data_imprumut":new Date("2024-05-20"),
        "data_scadenta":new Date("2024-06-03"),
        "data_returnare":null
    },
    {
        "id_utilizator":113,
        "id_carte":"9786303210322",
        "data_imprumut":new Date("2023-06-15"),
        "data_scadenta":new Date("2023-06-29"),
        "data_returnare":new Date("2023-06-28")
    },
    {
        "id_utilizator":113,
        "id_carte":"9786060865469",
        "data_imprumut":new Date("2024-02-08"),
        "data_scadenta":new Date("2024-02-22"),
        "data_returnare":new Date("2024-02-20")
    },
    {
        "id_utilizator":113,
        "id_carte":"9786063311673",
        "data_imprumut":new Date("2024-05-13"),
        "data_scadenta":new Date("2024-05-27"),
        "data_returnare":null
    },
    {
        "id_utilizator":114,
        "id_carte":"9786067761849",
        "data_imprumut":new Date("2023-04-15"),
        "data_scadenta":new Date("2023-04-29"),
        "data_returnare":new Date("2023-04-28")
    },
    {
        "id_utilizator":114,
        "id_carte":"9780451524935",
        "data_imprumut":new Date("2023-12-08"),
        "data_scadenta":new Date("2023-12-22"),
        "data_returnare":new Date("2023-12-17")
    },
    {
        "id_utilizator":114,
        "id_carte":"9786068754468",
        "data_imprumut":new Date("2024-05-16"),
        "data_scadenta":new Date("2024-05-30"),
        "data_returnare":null
    },
    {
        "id_utilizator":115,
        "id_carte":"9786067761849",
        "data_imprumut":new Date("2024-04-05"),
        "data_scadenta":new Date("2024-04-19"),
        "data_returnare":new Date("2024-04-25")
    },
    {
        "id_utilizator":115,
        "id_carte":"9786067107173",
        "data_imprumut":new Date("2023-03-10"),
        "data_scadenta":new Date("2024-03-24"),
        "data_returnare":new Date("2023-03-24")
    }
]);
