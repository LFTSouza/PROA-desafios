db.medicos.insertMany([
  {
    "nome": "Lev Vygotsky",
    "data_nascimento": "1975-03-10",
    "especialidades": ["Pediatra"],
    "tipo": "Especialista",
    "status": 1,
    "documentos": {
      "CPF": "123.456.789-01",
      "CRM": "123456-SP"
    }
  },
  {
    "nome": "Maria Montessori",
    "data_nascimento": "1980-12-15",
    "especialidades": ["Pediatra"],
    "tipo": "Generalista",
    "status": 1,
    "documentos": {
      "CPF": "234.567.890-12",
      "CRM": "234567-SP"
    }
  },
  {
    "nome": "Paulo Freire",
    "data_nascimento": "1969-05-19",
    "especialidades": ["Clínica Geral"],
    "tipo": "Especialista",
    "status": 1,
    "documentos": {
      "CPF": "345.678.901-23",
      "CRM": "345678-SP"
    }
  },
  {
    "nome": "Jean Piaget",
    "data_nascimento": "1978-09-25",
    "especialidades": ["Clínica Geral", "Pediatra"],
    "tipo": "Generalista",
    "status": 1,
    "documentos": {
      "CPF": "456.789.012-34",
      "CRM": "456789-SP"
    }
  },
  {
    "nome": "Nikola Tesla",
    "data_nascimento": "1985-07-10",
    "especialidades": ["Gastroenterologia"],
    "tipo": "Especialista",
    "status": 1,
    "documentos": {
      "CPF": "567.890.123-45",
      "CRM": "567890-SP"
    }
  },
  {
    "nome": "Thomas Edison",
    "data_nascimento": "1982-08-18",
    "especialidades": ["Dermatologia"],
    "tipo": "Especialista",
    "status": 1,
    "documentos": {
      "CPF": "678.901.234-56",
      "CRM": "678901-SP"
    }
  },
  {
    "nome": "Albert Einstein",
    "data_nascimento": "1974-04-14",
    "especialidades": ["Gastroenterologia", "Clínica Geral"],
    "tipo": "Especialista",
    "status": 1,
    "documentos": {
      "CPF": "789.012.345-67",
      "CRM": "789012-SP"
    }
  },
  {
    "nome": "Isaac Newton",
    "data_nascimento": "1990-10-23",
    "especialidades": ["Dermatologia"],
    "tipo": "Residente",
    "status": 1,
    "documentos": {
      "CPF": "890.123.456-78",
      "CRM": "890123-SP"
    }
  },
  {
    "nome": "Galileo Galilei",
    "data_nascimento": "1987-06-30",
    "especialidades": ["Clínica Geral"],
    "tipo": "Residente",
    "status": 1,
    "documentos": {
      "CPF": "901.234.567-89",
      "CRM": "901234-SP"
    }
  },
  {
    "nome": "Sigmund Freud",
    "data_nascimento": "1972-11-22",
    "especialidades": ["Dermatologia", "Clínica Geral"],
    "tipo": "Especialista",
    "status": 0,
    "documentos": {
      "CPF": "012.345.678-90",
      "CRM": "012345-SP"
    }
  }
])

db.pacientes.insertMany([
  {
    "Nome": "Ana Maria Silva",
    "Data_Nascimento": "1985-04-12",
    "Endereco": {
      "Logradouro": "Rua das Flores",
      "Numero": "123",
      "Bairro": "Centro",
      "Cidade": "São Paulo",
      "Estado": "SP",
      "CEP": "01000-000"
    },
    "Contato": {
      "Telefone": "(11) 98765-4321",
      "Email": "ana.silva@example.com"
    },
    "Convenio": {
      "Nome": "Saúde Plus",
      "Validade": "2025-04-12",
      "CNPJ": "12.345.678/0001-90",
      "Carencia": 30
    },
    "Documentos": {
      "CPF": "123.456.789-00",
      "RG": "12.345.678-9"
    }
  },
  {
    "Nome": "João Pedro Santos",
    "Data_Nascimento": "1990-08-25",
    "Endereco": {
      "Logradouro": "Avenida Paulista",
      "Numero": "456",
      "Bairro": "Bela Vista",
      "Cidade": "São Paulo",
      "Estado": "SP",
      "CEP": "01311-000"
    },
    "Contato": {
      "Telefone": "(11) 99876-5432",
      "Email": "joao.santos@example.com"
    },
    "Convenio": {
      "Nome": "Vida Total",
      "Validade": "2024-08-25",
      "CNPJ": "98.765.432/0001-10",
      "Carencia": 60
    },
    "Documentos": {
      "CPF": "987.654.321-00",
      "RG": "98.765.432-1"
    }
  },
  {
    "Nome": "Mariana Costa",
    "Data_Nascimento": "1995-11-10",
    "Endereco": {
      "Logradouro": "Rua das Palmeiras",
      "Numero": "789",
      "Bairro": "Jardim",
      "Cidade": "Rio de Janeiro",
      "Estado": "RJ",
      "CEP": "22040-050"
    },
    "Contato": {
      "Telefone": "(21) 91234-5678",
      "Email": "mariana.costa@example.com"
    },
    "Convenio": {
      "Nome": "Bem-Estar Saúde",
      "Validade": "2026-11-10",
      "CNPJ": "15.678.901/0001-45",
      "Carencia": 90
    },
    "Documentos": {
      "CPF": "321.654.987-00",
      "RG": "98.765.432-2"
    }
  },
  {
    "Nome": "Carlos Alberto Souza",
    "Data_Nascimento": "1978-06-22",
    "Endereco": {
      "Logradouro": "Rua dos Jacarandás",
      "Numero": "112",
      "Bairro": "Vila Nova",
      "Cidade": "Campinas",
      "Estado": "SP",
      "CEP": "13000-000"
    },
    "Contato": {
      "Telefone": "(19) 98888-7777",
      "Email": "carlos.souza@example.com"
    },
    "Convenio": {
      "Nome": "Premium Saúde",
      "Validade": "2023-06-22",
      "CNPJ": "20.123.456/0001-78",
      "Carencia": 45
    },
    "Documentos": {
      "CPF": "456.789.123-00",
      "RG": "23.456.789-1"
    }
  },
  {
    "Nome": "Fernanda Oliveira",
    "Data_Nascimento": "1989-09-09",
    "Endereco": {
      "Logradouro": "Rua das Margaridas",
      "Numero": "321",
      "Bairro": "Centro",
      "Cidade": "Curitiba",
      "Estado": "PR",
      "CEP": "80010-000"
    },
    "Contato": {
      "Telefone": "(41) 99876-1234",
      "Email": "fernanda.oliveira@example.com"
    },
    "Convenio": {
      "Nome": "Saúde Prime",
      "Validade": "2023-12-01",
      "CNPJ": "22.334.556/0001-67",
      "Carencia": 60
    },
    "Documentos": {
      "CPF": "678.901.234-00",
      "RG": "34.567.890-2"
    }
  },
  {
    "Nome": "Roberto Carvalho",
    "Data_Nascimento": "1983-03-30",
    "Endereco": {
      "Logradouro": "Avenida Brasil",
      "Numero": "145",
      "Bairro": "Santa Cecília",
      "Cidade": "Belo Horizonte",
      "Estado": "MG",
      "CEP": "30100-000"
    },
    "Contato": {
      "Telefone": "(31) 99999-8888",
      "Email": "roberto.carvalho@example.com"
    },
    "Convenio": {
      "Nome": "Viva Saúde",
      "Validade": "2025-03-30",
      "CNPJ": "23.456.789/0001-89",
      "Carencia": 90
    },
    "Documentos": {
      "CPF": "789.123.456-00",
      "RG": "45.678.901-3"
    }
  },
  {
    "Nome": "Juliana Pereira",
    "Data_Nascimento": "1992-05-25",
    "Endereco": {
      "Logradouro": "Rua das Acácias",
      "Numero": "789",
      "Bairro": "Moema",
      "Cidade": "São Paulo",
      "Estado": "SP",
      "CEP": "04567-000"
    },
    "Contato": {
      "Telefone": "(11) 91111-2222",
      "Email": "juliana.pereira@example.com"
    },
    "Convenio": {
      "Nome": "Saúde Mais",
      "Validade": "2026-05-25",
      "CNPJ": "34.567.890/0001-90",
      "Carencia": 30
    },
    "Documentos": {
      "CPF": "890.123.456-00",
      "RG": "56.789.012-4"
    }
  },
  {
    "Nome": "Ricardo Mendes",
    "Data_Nascimento": "1987-12-15",
    "Endereco": {
      "Logradouro": "Avenida Ipiranga",
      "Numero": "432",
      "Bairro": "República",
      "Cidade": "São Paulo",
      "Estado": "SP",
      "CEP": "01040-000"
    },
    "Contato": {
      "Telefone": "(11) 92222-3333",
      "Email": "ricardo.mendes@example.com"
    },
    "Convenio": {
      "Nome": "Saúde Completa",
      "Validade": "2025-12-15",
      "CNPJ": "45.678.901/0001-12",
      "Carencia": 45
    },
    "Documentos": {
      "CPF": "901.234.567-00",
      "RG": "67.890.123-5"
    }
  },
  {
    "Nome": "Luciana Almeida",
    "Data_Nascimento": "1994-07-18",
    "Endereco": {
      "Logradouro": "Rua São Carlos",
      "Numero": "654",
      "Bairro": "Santa Efigênia",
      "Cidade": "Belo Horizonte",
      "Estado": "MG",
      "CEP": "30200-000"
    },
    "Contato": {
      "Telefone": "(31) 94444-5555",
      "Email": "luciana.almeida@example.com"
    },
    "Convenio": {
      "Nome": "Plano Saúde",
      "Validade": "2024-07-18",
      "CNPJ": "56.789.012/0001-34",
      "Carencia": 60
    },
    "Documentos": {
      "CPF": "012.345.678-00",
      "RG": "78.901.234-6"
    }
  },
  {
    "Nome": "Felipe Martins",
    "Data_Nascimento": "1998-01-22",
    "Endereco": {
      "Logradouro": "Rua dos Lírios",
      "Numero": "121",
      "Bairro": "Parque das Nações",
      "Cidade": "Santo André",
      "Estado": "SP",
      "CEP": "09210-000"
    },
    "Contato": {
      "Telefone": "(11) 95555-6666",
      "Email": "felipe.martins@example.com"
    },
    "Convenio": {
      "Nome": "Total Saúde",
      "Validade": "2023-01-22",
      "CNPJ": "67.890.123/0001-56",
      "Carencia": 30
    },
    "Documentos": {
      "CPF": "123.456.789-11",
      "RG": "89.012.345-7"
    }
  },
  {
    "Nome": "Gabriela Santos",
    "Data_Nascimento": "2000-04-05",
    "Endereco": {
      "Logradouro": "Avenida dos Andradas",
      "Numero": "876",
      "Bairro": "Funcionários",
      "Cidade": "Belo Horizonte",
      "Estado": "MG",
      "CEP": "30190-000"
    },
    "Contato": {
      "Telefone": "(31) 97777-8888",
      "Email": "gabriela.santos@example.com"
    },
    "Convenio": {
      "Nome": "Vida Bem",
      "Validade": "2024-04-05",
      "CNPJ": "78.901.234/0001-78",
      "Carencia": 60
    },
    "Documentos": {
      "CPF": "234.567.890-22",
      "RG": "90.123.456-8"
    }
  },
  {
    "Nome": "Rafael Lima",
    "Data_Nascimento": "1982-03-10",
    "Endereco": {
      "Logradouro": "Rua Afonso Pena",
      "Numero": "543",
      "Bairro": "Savassi",
      "Cidade": "Belo Horizonte",
      "Estado": "MG",
      "CEP": "30130-000"
    },
    "Contato": {
      "Telefone": "(31) 98888-9999",
      "Email": "rafael.lima@example.com"
    },
    "Convenio": {
      "Nome": "Plano Essencial",
      "Validade": "2026-03-10",
      "CNPJ": "89.012.345/0001-90",
      "Carencia": 90
    },
    "Documentos": {
      "CPF": "345.678.901-33",
      "RG": "12.345.678-9"
    }
  },
  {
    "Nome": "Aline Sousa",
    "Data_Nascimento": "1993-10-12",
    "Endereco": {
      "Logradouro": "Rua 15 de Novembro",
      "Numero": "333",
      "Bairro": "Centro",
      "Cidade": "Curitiba",
      "Estado": "PR",
      "CEP": "80020-000"
    },
    "Contato": {
      "Telefone": "(41) 97777-1111",
      "Email": "aline.sousa@example.com"
    },
    "Convenio": {
      "Nome": "Plano Vida",
      "Validade": "2023-10-12",
      "CNPJ": "90.123.456/0001-12",
      "Carencia": 30
    },
    "Documentos": {
      "CPF": "456.789.012-44",
      "RG": "23.456.789-1"
    }
  },
  {
    "Nome": "Lucas Nogueira",
    "Data_Nascimento": "1985-07-30",
    "Endereco": {
      "Logradouro": "Avenida Tiradentes",
      "Numero": "765",
      "Bairro": "Centro",
      "Cidade": "São Paulo",
      "Estado": "SP",
      "CEP": "01102-000"
    },
    "Contato": {
      "Telefone": "(11) 96666-3333",
      "Email": "lucas.nogueira@example.com"
    },
    "Convenio": {
      "Nome": "Plano Pleno",
      "Validade": "2025-07-30",
      "CNPJ": "01.234.567/0001-89",
      "Carencia": 60
    },
    "Documentos": {
      "CPF": "567.890.123-55",
      "RG": "34.567.890-2"
    }
  },
  {
    "Nome": "Camila Costa",
    "Data_Nascimento": "1996-12-21",
    "Endereco": {
      "Logradouro": "Rua João Pessoa",
      "Numero": "654",
      "Bairro": "Vila Mariana",
      "Cidade": "São Paulo",
      "Estado": "SP",
      "CEP": "04102-000"
    },
    "Contato": {
      "Telefone": "(11) 95555-4444",
      "Email": "camila.costa@example.com"
    },
    "Convenio": {
      "Nome": "Plano Max",
      "Validade": "2026-12-21",
      "CNPJ": "02.345.678/0001-90",
      "Carencia": 45
    },
    "Documentos": {
      "CPF": "678.901.234-66",
      "RG": "45.678.901-3"
    }
  },
  {
    "Nome": "Pedro Rocha",
    "Data_Nascimento": "1988-11-05",
    "Endereco": {
      "Logradouro": "Rua dos Ipês",
      "Numero": "999",
      "Bairro": "Jardim América",
      "Cidade": "Campinas",
      "Estado": "SP",
      "CEP": "13040-000"
    },
    "Contato": {
      "Telefone": "(19) 94444-6666",
      "Email": "pedro.rocha@example.com"
    },
    "Convenio": {
      "Nome": "Plano Bem-Estar",
      "Validade": "2024-11-05",
      "CNPJ": "03.456.789/0001-12",
      "Carencia": 90
    },
    "Documentos": {
      "CPF": "789.012.345-77",
      "RG": "56.789.012-4"
    }
  }
]
)
//===================================novo insert====================================================
db.pacientes.insertOne({
  Nome: "Gabriel Carvalho",
  Data_Nascimento: "1998-01-01",
  Endereco: {
    Logradouro: "Rua Exemplo",
    Numero: "123",
    Bairro: "Centro",
    Cidade: "Cidade Exemplo",
    Estado: "Estado Exemplo",
    CEP: "12345-678"
  },
  Contato: {
    Telefone: "(11) 1234-5678",
    E_mail: "exemplo@dominio.com"
  },
  Convenio: {
    Nome: "Convenio Exemplo",
    Validade: "2025-12-31",
    CNPJ: "12.345.678/0001-99",
    Carencia: 30
  },
  Documentos: {
    CPF: "123.456.789-00",
    RG: "12.345.678-9"
  }
});
//===================================novo insert====================================================


db.consultas.insertMany(
  [
    {
      "Data_realizacao": "2024-10-01T09:30:00Z",
      "Medico_responsavel_id": ObjectId("671ab5260122e9da30750833"),
      "Paciente_id": ObjectId("671ab98d138e508c8103b521"),
      "Valor_consulta": 250.00,
      "Convenio": true,
      "Especialidade_buscada": "Dermatologia",
      "Descricao": "Consulta para avaliação de manchas na pele.",
      "Receita": {
        "_id": "60d5ec2e8b1b3c001d6f9c79",
        "Medicamentos": ["Pomada A", "Creme Hidratante"],
        "Quantidade": 2,
        "Instrucoes": "Aplicar na pele 2 vezes ao dia.",
        "Tratamentos": ["Evitar exposição ao sol", "Uso de protetor solar diariamente"]
      }
    },
    {
      "Data_realizacao": "2024-10-02T10:00:00Z",
      "Medico_responsavel_id": ObjectId("671ab5260122e9da30750832"),
      "Paciente_id": ObjectId("671ab98d138e508c8103b522"),
      "Valor_consulta": 300.00,
      "Convenio": false,
      "Especialidade_buscada": "Gastroenterologia",
      "Descricao": "Consulta para investigação de dores abdominais.",
      "Receita": {
        "_id": "60d5ec2e8b1b3c001d6f9c82",
        "Medicamentos": ["Antiespasmódico", "Protetor gástrico"],
        "Quantidade": 2,
        "Instrucoes": "Tomar antes das refeições.",
        "Tratamentos": ["Dieta leve", "Evitar alimentos gordurosos"]
      }
    },
    {
      "Data_realizacao": "2024-10-03T15:30:00Z",
      "Medico_responsavel_id": ObjectId("671ab5260122e9da30750831"),
      "Paciente_id": ObjectId("671ab98d138e508c8103b523"),
      "Valor_consulta": 200.00,
      "Convenio": true,
      "Especialidade_buscada": "Pediatria",
      "Descricao": "Consulta de rotina para acompanhamento infantil.",
      "Receita": {
        "_id": "60d5ec2e8b1b3c001d6f9c85",
        "Medicamentos": ["Vitamina D", "Suplemento de Ferro"],
        "Quantidade": 2,
        "Instrucoes": "Administrar diariamente.",
        "Tratamentos": ["Manter boa alimentação", "Estimular atividades físicas"]
      }
    },
    {
      "Data_realizacao": "2024-10-04T08:45:00Z",
      "Medico_responsavel_id": ObjectId("671ab5260122e9da30750834"),
      "Paciente_id": ObjectId("671ab98d138e508c8103b524"),
      "Valor_consulta": 150.00,
      "Convenio": true,
      "Especialidade_buscada": "Clínica Geral",
      "Descricao": "Consulta para avaliação geral de saúde.",
      "Receita": {
        "_id": "60d5ec2e8b1b3c001d6f9c88",
        "Medicamentos": ["Polivitamínico"],
        "Quantidade": 1,
        "Instrucoes": "Tomar 1 cápsula ao dia.",
        "Tratamentos": ["Praticar exercícios físicos regulares"]
      }
    },
    {
      "Data_realizacao": "2024-10-05T14:00:00Z",
      "Medico_responsavel_id": ObjectId("671ab5260122e9da30750833"),
      "Paciente_id": ObjectId("671ab98d138e508c8103b525"),
      "Valor_consulta": 280.00,
      "Convenio": false,
      "Especialidade_buscada": "Dermatologia",
      "Descricao": "Consulta para tratamento de acne severa.",
      "Receita": {
        "_id": "60d5ec2e8b1b3c001d6f9c91",
        "Medicamentos": ["Antibiótico", "Sabonete Específico"],
        "Quantidade": 2,
        "Instrucoes": "Tomar 2 vezes ao dia.",
        "Tratamentos": ["Manter a pele limpa e seca"]
      }
    },
    {
      "Data_realizacao": "2024-10-06T11:30:00Z",
      "Medico_responsavel_id": ObjectId("671ab5260122e9da30750834"),
      "Paciente_id": ObjectId("671ab98d138e508c8103b526"),
      "Valor_consulta": 320.00,
      "Convenio": true,
      "Especialidade_buscada": "Gastroenterologia",
      "Descricao": "Consulta para tratamento de refluxo gástrico.",
      "Receita": {
        "_id": "60d5ec2e8b1b3c001d6f9c94",
        "Medicamentos": ["Inibidor de bomba de prótons"],
        "Quantidade": 1,
        "Instrucoes": "Tomar em jejum.",
        "Tratamentos": ["Evitar bebidas gaseificadas"]
      }
    },
    {
      "Data_realizacao": "2024-10-07T10:00:00Z",
      "Medico_responsavel_id": ObjectId("671ab5260122e9da30750831"),
      "Paciente_id": ObjectId("671ab98d138e508c8103b527"),
      "Valor_consulta": 210.00,
      "Convenio": true,
      "Especialidade_buscada": "Pediatria",
      "Descricao": "Consulta de acompanhamento para recém-nascido.",
      "Receita": {
        "_id": "60d5ec2e8b1b3c001d6f9c97",
        "Medicamentos": ["Vitamina A", "Vitamina C"],
        "Quantidade": 2,
        "Instrucoes": "Administrar diariamente em gotas.",
        "Tratamentos": ["Aleitamento materno exclusivo"]
      }
    },
    {
      "Data_realizacao": "2024-10-08T13:30:00Z",
      "Medico_responsavel_id": ObjectId("671ab5260122e9da30750830"),
      "Paciente_id": ObjectId("671ab98d138e508c8103b528"),
      "Valor_consulta": 260.00,
      "Convenio": false,
      "Especialidade_buscada": "Clínica Geral",
      "Descricao": "Consulta para avaliação de dores musculares.",
      "Receita": {
        "_id": "60d5ec2e8b1b3c001d6f9c100",
        "Medicamentos": ["Analgésico"],
        "Quantidade": 1,
        "Instrucoes": "Tomar em caso de dor.",
        "Tratamentos": ["Fisioterapia"]
      }
    },
    {
      "Data_realizacao": "2024-10-09T17:45:00Z",
      "Medico_responsavel_id": ObjectId("671ab5260122e9da30750833"),
      "Paciente_id": ObjectId("671ab98d138e508c8103b529"),
      "Valor_consulta": 230.00,
      "Convenio": true,
      "Especialidade_buscada": "Dermatologia",
      "Descricao": "Consulta para tratamento de alergia cutânea.",
      "Receita": {
        "_id": "60d5ec2e8b1b3c001d6f9c103",
        "Medicamentos": ["Antialérgico", "Loção Hidratante"],
        "Quantidade": 2,
        "Instrucoes": "Aplicar nas áreas afetadas 2 vezes ao dia.",
        "Tratamentos": ["Evitar contato com produtos irritantes"]
      }
    },
    {
      "Data_realizacao": "2024-10-10T16:15:00Z",
      "Medico_responsavel_id": ObjectId("671ab5260122e9da3075082e"),
      "Paciente_id": ObjectId("671ab98d138e508c8103b52a"),
      "Valor_consulta": 220.00,
      "Convenio": false,
      "Especialidade_buscada": "Gastroenterologia",
      "Descricao": "Consulta para controle de gastrite crônica.",
      "Receita": {
        "_id": "60d5ec2e8b1b3c001d6f9c106",
        "Medicamentos": ["Protetor gástrico"],
        "Quantidade": 1,
        "Instrucoes": "Tomar antes das refeições.",
        "Tratamentos": ["Dieta sem alimentos ácidos"]
      }
    },
    {
      "Data_realizacao": "2024-10-11T11:00:00Z",
      "Medico_responsavel_id": ObjectId("671ab5260122e9da3075082f"),
      "Paciente_id": ObjectId("671ab98d138e508c8103b52b"),
      "Valor_consulta": 250.00,
      "Convenio": true,
      "Especialidade_buscada": "Pediatria",
      "Descricao": "Consulta de acompanhamento para vacinas.",
      "Receita": {
        "_id": "60d5ec2e8b1b3c001d6f9c109",
        "Medicamentos": ["Suplemento de Vitamina B"],
        "Quantidade": 1,
        "Instrucoes": "Administrar semanalmente.",
        "Tratamentos": ["Calendário de vacinas atualizado"]
      }
    },
    {
      "Data_realizacao": "2024-10-12T14:00:00Z",
      "Medico_responsavel_id": ObjectId("671ab5260122e9da30750830"),
      "Paciente_id": ObjectId("671ab98d138e508c8103b52b"),
      "Valor_consulta": 275.00,
      "Convenio": false,
      "Especialidade_buscada": "Clínica Geral",
      "Descricao": "Consulta de acompanhamento para hipertensão.",
      "Receita": {
        "_id": "60d5ec2e8b1b3c001d6f9c112",
        "Medicamentos": ["Antihipertensivo"],
        "Quantidade": 1,
        "Instrucoes": "Tomar diariamente.",
        "Tratamentos": ["Dieta com pouco sódio"]
      }
    },
    {
      "Data_realizacao": "2024-10-13T09:30:00Z",
      "Medico_responsavel_id": ObjectId("671ab5260122e9da30750833"),
      "Paciente_id": ObjectId("671ab98d138e508c8103b52c"),
      "Valor_consulta": 265.00,
      "Convenio": true,
      "Especialidade_buscada": "Dermatologia",
      "Descricao": "Consulta para tratamento de psoríase.",
      "Receita": {
        "_id": "60d5ec2e8b1b3c001d6f9c115",
        "Medicamentos": ["Corticosteroide"],
        "Quantidade": 1,
        "Instrucoes": "Aplicar nas áreas afetadas.",
        "Tratamentos": ["Hidratação da pele"]
      }
    },
    {
      "Data_realizacao": "2024-10-14T08:45:00Z",
      "Medico_responsavel_id": ObjectId("671ab5260122e9da3075082e"),
      "Paciente_id": ObjectId("671ab98d138e508c8103b52d"),
      "Valor_consulta": 240.00,
      "Convenio": false,
      "Especialidade_buscada": "Gastroenterologia",
      "Descricao": "Consulta para controle de síndrome do intestino irritável.",
      "Receita": {
        "_id": "60d5ec2e8b1b3c001d6f9c118",
        "Medicamentos": ["Probióticos", "Antiespasmódico"],
        "Quantidade": 2,
        "Instrucoes": "Tomar antes das refeições.",
        "Tratamentos": ["Dieta sem alimentos picantes"]
      }
    },
    {
      "Data_realizacao": "2024-10-15T12:30:00Z",
      "Medico_responsavel_id": ObjectId("671ab5260122e9da3075082e"),
      "Paciente_id": ObjectId("671ab98d138e508c8103b52e"),
      "Valor_consulta": 220.00,
      "Convenio": true,
      "Especialidade_buscada": "Pediatria",
      "Descricao": "Consulta para controle de asma infantil.",
      "Receita": {
        "_id": "60d5ec2e8b1b3c001d6f9c121",
        "Medicamentos": ["Bombinha de asma"],
        "Quantidade": 1,
        "Instrucoes": "Usar em caso de crise.",
        "Tratamentos": ["Ambiente limpo e sem poeira"]
      }
    },
    {
      "Data_realizacao": "2024-10-16T16:00:00Z",
      "Medico_responsavel_id": ObjectId("671ab5260122e9da3075082e"),
      "Paciente_id": ObjectId("671ab98d138e508c8103b52f"),
      "Valor_consulta": 280.00,
      "Convenio": false,
      "Especialidade_buscada": "Dermatologia",
      "Descricao": "Consulta para avaliação de queda de cabelo.",
      "Receita": {
        "_id": "60d5ec2e8b1b3c001d6f9c124",
        "Medicamentos": ["Tônico Capilar"],
        "Quantidade": 1,
        "Instrucoes": "Aplicar no couro cabeludo 2 vezes ao dia.",
        "Tratamentos": ["Manter dieta rica em vitaminas"]
      }
    }
  ]
)

db.consultas.insertMany(
  [
    {
      "Data_realizacao": "2017-05-14T10:30:00Z",
      "Medico_responsavel_id": ObjectId("671ab5260122e9da30750833"),
      "Paciente_id": ObjectId("671ab98d138e508c8103b526"),
      "Valor_consulta": 280.00,
      "Convenio": false,
      "Especialidade_buscada": "Dermatologia",
      "Descricao": "Consulta para tratamento de eczema.",
      "Receita": {
        "_id": "60d5ec2e8b1b3c001d6f9c132",
        "Medicamentos": ["Corticosteroide", "Hidratante"],
        "Quantidade": 2,
        "Instrucoes": "Aplicar duas vezes ao dia.",
        "Tratamentos": ["Manter a pele sempre hidratada"]
      }
    },
    {
      "Data_realizacao": "2016-08-20T14:00:00Z",
      "Medico_responsavel_id": ObjectId("671ab5260122e9da30750832"),
      "Paciente_id": ObjectId("671ab98d138e508c8103b521"),
      "Valor_consulta": 350.00,
      "Convenio": true,
      "Especialidade_buscada": "Gastroenterologia",
      "Descricao": "Consulta para diagnóstico de intolerância à lactose.",
      "Receita": {
        "_id": "60d5ec2e8b1b3c001d6f9c135",
        "Medicamentos": ["Enzima lactase"],
        "Quantidade": 1,
        "Instrucoes": "Tomar antes das refeições com derivados de leite.",
        "Tratamentos": ["Evitar alimentos que contenham lactose"]
      }
    },
    {
      "Data_realizacao": "2018-03-12T09:15:00Z",
      "Medico_responsavel_id": ObjectId("671ab5260122e9da30750834"),
      "Paciente_id": ObjectId("671ab98d138e508c8103b521"),
      "Valor_consulta": 240.00,
      "Convenio": false,
      "Especialidade_buscada": "Clínica Geral",
      "Descricao": "Consulta para controle de diabetes.",
      "Receita": {
        "_id": "60d5ec2e8b1b3c001d6f9c138",
        "Medicamentos": ["Metformina"],
        "Quantidade": 1,
        "Instrucoes": "Tomar diariamente após o café da manhã.",
        "Tratamentos": ["Dieta balanceada", "Atividades físicas regulares"]
      }
    },
    {
      "Data_realizacao": "2021-11-22T15:45:00Z",
      "Medico_responsavel_id": ObjectId("671ab5260122e9da30750831"),
      "Paciente_id": ObjectId("671ab98d138e508c8103b522"),
      "Valor_consulta": 290.00,
      "Convenio": true,
      "Especialidade_buscada": "Pediatria",
      "Descricao": "Consulta de acompanhamento para alergia alimentar em criança.",
      "Receita": {
        "_id": "60d5ec2e8b1b3c001d6f9c141",
        "Medicamentos": ["Antialérgico"],
        "Quantidade": 1,
        "Instrucoes": "Administrar em caso de reação alérgica.",
        "Tratamentos": ["Evitar alimentos alergênicos", "Revisão trimestral"]
      }
    }
  ]
)

//===================================novo insert====================================================
db.consultas.insertOne({
  Data_realizacao: ISODate("2015-06-15T00:00:00Z"),
  Medico_responsavel_id: ObjectId("671ab5260122e9da30750835"),
  Paciente_id: ObjectId("6728c0bc7dc0528695933146"),
  Convenio: true,
  Especialidade_buscada: "Dermatologia",
  Descricao: "Consulta para avaliação de problemas de pele",
  Receita: {
    _id: ObjectId("60d5f4c32f8fb814b56fa190"),
    Medicamentos: ["Pomada para acne", "Antibiótico oral"],
    Quantidade: 2,
    Instrucoes: "Aplicar a pomada duas vezes ao dia e tomar o antibiótico conforme prescrição.",
    Tratamentos: [
      { Nome: "Aplicação de pomada", Frequencia: "Duas vezes ao dia" },
      { Nome: "Antibiótico oral", Frequencia: "Uma vez ao dia" }
    ]
  }
});
//===================================novo insert====================================================

// =====================================Consultas=======================================================
db.quartos.insertMany(
  [
    {
      "Numeracao": 201,
      "Tipo": "Apartamento",
      "Valor_Diario": 350
    },
    {
      "Numeracao": 202,
      "Tipo": "Quarto Duplo",
      "Valor_Diario": 200
    },
    {
      "Numeracao": 203,
      "Tipo": "Enfermaria",
      "Valor_Diario": 150
    },
    {
      "Numeracao": 204,
      "Tipo": "Apartamento",
      "Valor_Diario": 370
    },
    {
      "Numeracao": 205,
      "Tipo": "Quarto Duplo",
      "Valor_Diario": 220
    },
    {
      "Numeracao": 206,
      "Tipo": "Enfermaria",
      "Valor_Diario": 160
    },
    {
      "Numeracao": 207,
      "Tipo": "Apartamento",
      "Valor_Diario": 390
    }
  ]
)

db.enfermeiros.insertMany(
  [
    {
      "_id": "64a23b0de77f5a001c40d1a1",
      "Nome": "Ana Clara Souza",
      "CPF": "123.456.789-01",
      "Registro_COREN": "123456-SP"
    },
    {
      "_id": "64a23b0de77f5a001c40d1a2",
      "Nome": "Bruno Lima",
      "CPF": "987.654.321-00",
      "Registro_COREN": "654321-RJ"
    },
    {
      "_id": "64a23b0de77f5a001c40d1a3",
      "Nome": "Carla Mendes",
      "CPF": "321.654.987-10",
      "Registro_COREN": "987654-MG"
    },
    {
      "_id": "64a23b0de77f5a001c40d1a4",
      "Nome": "Diego Costa",
      "CPF": "456.123.789-20",
      "Registro_COREN": "123987-SP"
    },
    {
      "_id": "64a23b0de77f5a001c40d1a5",
      "Nome": "Eduarda Martins",
      "CPF": "654.321.987-30",
      "Registro_COREN": "321654-BA"
    },
    {
      "_id": "64a23b0de77f5a001c40d1a6",
      "Nome": "Fernanda Alves",
      "CPF": "789.123.456-40",
      "Registro_COREN": "456321-RS"
    },
    {
      "_id": "64a23b0de77f5a001c40d1a7",
      "Nome": "Gabriel Ferreira",
      "CPF": "123.789.456-50",
      "Registro_COREN": "789123-PR"
    },
    {
      "_id": "64a23b0de77f5a001c40d1a8",
      "Nome": "Helena Ribeiro",
      "CPF": "987.321.654-60",
      "Registro_COREN": "654789-PE"
    },
    {
      "_id": "64a23b0de77f5a001c40d1a9",
      "Nome": "Igor Oliveira",
      "CPF": "321.987.654-70",
      "Registro_COREN": "987321-CE"
    },
    {
      "_id": "64a23b0de77f5a001c40d1aa",
      "Nome": "Juliana Pereira",
      "CPF": "654.987.321-80",
      "Registro_COREN": "321987-ES"
    }
  ]
)

db.internacao.insertMany(
  [
    {
      "Paciente_id": ObjectId("671ab98d138e508c8103b522"),
      "medico_responsavel": ObjectId("671ab5260122e9da30750830"),
      "Data_entrada": "2016-03-10",
      "Previsao_alta": "2016-03-15",
      "Efetiva_alta": "2016-03-14",
      "Procedimento": ["cirurgia", "exame de sangue"],
      "Quarto_id": ObjectId("671ac8fa16fe5ee1245dd62f"),
      "Enfermeiros_responsaveis": [ObjectId("671aca5716fe5ee1245dd630"), ObjectId("671aca5716fe5ee1245dd631")]
    },
    {
      "Paciente_id": ObjectId("671ab98d138e508c8103b521"),
      "medico_responsavel": ObjectId("671ab5260122e9da30750831"),
      "Data_entrada": "2017-05-21",
      "Previsao_alta": "2017-05-28",
      "Efetiva_alta": "2017-05-27",
      "Procedimento": ["exame cardiológico", "medicação intravenosa"],
      "Quarto_id": ObjectId("671ac8fa16fe5ee1245dd62c"),
      "Enfermeiros_responsaveis": [ObjectId("671aca5716fe5ee1245dd632"), ObjectId("671aca5716fe5ee1245dd633")]
    },
    {
      "Paciente_id": ObjectId("671ab98d138e508c8103b522"),
      "medico_responsavel": ObjectId("671ab5260122e9da30750834"),
      "Data_entrada": "2018-07-15",
      "Previsao_alta": "2018-07-20",
      "Efetiva_alta": "2018-07-19",
      "Procedimento": ["tratamento de ferida", "exame de urina"],
      "Quarto_id": ObjectId("671ac8fa16fe5ee1245dd62b"),
      "Enfermeiros_responsaveis": [ObjectId("671aca5716fe5ee1245dd634"), ObjectId("671aca5716fe5ee1245dd635")]
    },
    {
      "Paciente_id": ObjectId("671ab98d138e508c8103b523"),
      "medico_responsavel": ObjectId("671ab5260122e9da30750830"),
      "Data_entrada": "2019-09-02",
      "Previsao_alta": "2019-09-10",
      "Efetiva_alta": "2019-09-09",
      "Procedimento": ["cirurgia", "exame de sangue"],
      "Quarto_id": ObjectId("671ac8fa16fe5ee1245dd629"),
      "Enfermeiros_responsaveis": [ObjectId("671aca5716fe5ee1245dd636"), ObjectId("671aca5716fe5ee1245dd637")]
    },
    {
      "Paciente_id": ObjectId("671ab98d138e508c8103b524"),
      "medico_responsavel": ObjectId("671ab5260122e9da30750836"),
      "Data_entrada": "2020-11-15",
      "Previsao_alta": "2020-11-22",
      "Efetiva_alta": "2020-11-21",
      "Procedimento": ["fisioterapia", "exame de sangue"],
      "Quarto_id": ObjectId("671ac8fa16fe5ee1245dd62c"),
      "Enfermeiros_responsaveis": [ObjectId("671aca5716fe5ee1245dd638"), ObjectId("671aca5716fe5ee1245dd639")]
    },
    {
      "Paciente_id": ObjectId("671ab98d138e508c8103b525"),
      "medico_responsavel": ObjectId("671ab5260122e9da30750834"),
      "Data_entrada": "2021-01-05",
      "Previsao_alta": "2021-01-12",
      "Efetiva_alta": "2021-01-11",
      "Procedimento": ["exame de sangue", "tomografia"],
      "Quarto_id": ObjectId("671ac8fa16fe5ee1245dd62b"),
      "Enfermeiros_responsaveis": [ObjectId("671aca5716fe5ee1245dd631"), ObjectId("671aca5716fe5ee1245dd633")]
    },
    {
      "Paciente_id": ObjectId("671ab98d138e508c8103b526"),
      "medico_responsavel": ObjectId("671ab5260122e9da30750831"),
      "Data_entrada": "2021-10-20",
      "Previsao_alta": "2021-10-27",
      "Efetiva_alta": "2021-10-26",
      "Procedimento": ["tratamento de queimaduras", "exame de urina"],
      "Quarto_id": ObjectId("671ac8fa16fe5ee1245dd62c"),
      "Enfermeiros_responsaveis": [ObjectId("671aca5716fe5ee1245dd635"), ObjectId("671aca5716fe5ee1245dd639")]
    }
  ]
)

//===================================novo insert====================================================
db.Internacao.insertOne({
  Paciente_id: ObjectId("6728c0bc7dc0528695933146"),
  medico_responsavel: ObjectId("671ab5260122e9da30750835"),
  Data_entrada: "2015-06-15",
  Previsao_alta: "2015-06-20",
  Efetiva_alta: "2015-06-19",
  Procedimento: [
    "Remoção de verrugas",
    "Tratamento de acne",
    "Biópsia de pele"
  ],
  Quarto_id: ObjectId("671ac8fa16fe5ee1245dd62b"),
  Enfermeiros_responsaveis: [
    ObjectId("671aca5716fe5ee1245dd639"),
    ObjectId("671aca5716fe5ee1245dd638")
  ]
});
//===================================novo insert====================================================

// ================================================================CONSULTAS=======================================================================================================

db.medicos.upateMany(
  { status: 1 },
  { $set: { "em_atividade.atuante": true } }
)

db.medicos.updateOne(
  { _id: ObjectId("671ab5260122e9da30750830") },
  { $set: { "em_atividade": false } }
)

//=================================================================Consultas II=====================================================================================================

// 1

db.consultas.aggregate([
  {
    $match: {
      Data_realizacao: {
        $gte: ISODate("2020-01-01"),
        $lt: ISODate("2021-01-01")
      }
    }
  },

  {
    $group: {
      _id: null,
      totalConsultas: { $push: "$$ROOT" },
      mediaValorConsulta: { $avg: "$Valor_consulta" },
      qntdConvenio: { $sum: { $cond: [{ $eq: ["$Convenio", true] }, 1, 0] } }
    }
  },
])
/*
O comando $$ROOT é utilizado para retornar todos os dados bases do documento e ele sempre é utilizado
em conjunto com o $Push, onde ele retorna um array de todos os valores resultantes
*/

//2

db.internacao.aggregate([
  {
    $match: {
      $expr: {
        $gt: ["$Efetiva_alta", "$Previsao_alta"]
      }
      /*$expr é utilizado para fazer consultas*/
    }
  }
])

//3

db.consultas.aggregate([
  {
    $group: {
      _id: null,
      mindate: { $min: "$Data_realizacao" }
    }
  },

  {
    $lookup: {
      from: "consultas",
      let: { minDate: "$mindate" },
      pipeline: [
        {
          $match: {
            $expr: { $eq: ["$Data_realizacao", "$$minDate"] }
          }
        },
        {
          $project: { _id: 0, Receita: 1 }
        }
      ],
      as: "receitaAntiga"
    }
  },

  {
    $project: {
      _id: 0,
      minDate: 1,
      receitaAntiga: "$receitaAntiga.Receita"
    }
  }
])

//4

db.consultas.aggregate([
  {
    $match: {
      Convenio: false
    }
  },

  {
    $sort: { Valor_consulta: -1 }
  },

  {
    $limit: 1
  },

  {
    $unionWith: {
      //Combina 2 agregações em uma unica agregação
      coll: "consultas",
      pipeline: [
        {
          $match: {
            Convenio: false
          }
        },
        {
          $sort: { Valor_consulta: 1 }
        },
        {
          $limit: 1
        }
      ]
    }
  }
]);

//5

db.internacao.aggregate([
  {
    $project: {
      qntd_dias: {
        $dateDiff: {
          startDate: "$Data_entrada",
          endDate: "$Efetiva_alta",
          unit: "day"
        }
      },
      todosDados: "$$ROOT"
    }
  },
  {
    $unionWith: {
      coll: "quartos",
      pipeline: [
        {
          $project: {
            _id: 1,
            quarto: "$$ROOT",
            valorTotal: {
              $multiply: ['$qntd_dias', '$Valor_Diario']
            }
          }
        }
      ]
    }
  }
])

//6

db.internacao.aggregate([
  {
    $project: {
      qntd_dias: {
        $dateDiff: {
          startDate: "$Data_entrada",
          endDate: "$Efetiva_alta",
          unit: "day"
        }
      },
      Quarto_id: 1
    }
  },
  {
    $lookup: {
      from: "quartos",
      localField: "Quarto_id",
      foreignField: "_id",
      as: "quartoInfo"
    }
  },
  {
    $unwind: "$quartoInfo"
  },
  {
    $addFields: {
      valorTotal: {
        $multiply: ["$qntd_dias", "$quartoInfo.Valor_Diario"]
      }
    }
  },

  {
    $unionWith: {
      coll: "quartos",
      pipeline: [
        {
          $project: {
            _id: 1,
            quartosDados: "$$ROOT"
          }
        }
      ]
    }
  },

  {
    $project: {
      _id: 1,
      internacao: "$ROOT"
    }
  }
])

//7

db.internacao.aggregate([
  {
    $lookup: {
      from: "pacientes",
      localField: "Paciente_id",
      foreignField: "_id",
      as: "paciente_info"
    }
  },
  {
    $unwind: "$paciente_info"
  },
  {
    $lookup: {
      from: "medicos",
      localField: "medico_responsavel",
      foreignField: "_id",
      as: "medico_info"
    }
  },
  {
    $unwind: "$medico_info"
  },
  {
    $project: {
      Data_entrada: 1,
      "paciente_info.Data_Nascimento": 1,
      "paciente_info.Nome": 1,
      idade: {
        $dateDiff: {
          startDate: "$paciente_info.Data_Nascimento",
          endDate: "$Data_entrada",
          unit: "year"
        }
      },
      "medico_info.especialidades": 1
    }
  },
  {
    $match: {
      idade: { $lt: 18 }
    }
  },
  {
    $sort: { Data_entrada: -1 }
  },
  {
    $limit: 1
  },
]);

// 8

db.internacao.aggregate([
  {
    $lookup: {
      from: "medicos",
      localField: "medico_responsavel",
      foreignField: "_id",
      as: "medico_info"
    }
  },
  {
    $unwind: "$medico_info"
  },
  {
    $lookup: {
      from: "pacientes",
      localField: "Paciente_id",
      foreignField: "_id",
      as: "paciente_info"
    }
  },
  {
    $unwind: "$paciente_info"
  },
  {
    $project: {
      "paciente_info.Nome": 1,
      "medico_info.nome": 1,
      Data_entrada: 1,
      Procedimento: 1,
      especialidades: "$medico_info.especialidades"
    }
  },
  {
    $match: {
      $expr: {
        $in: [
          "gastroenterologia",
          { $map: { input: "$especialidades", as: "especialidade", in: { $isLower: "$$especialidade" } } }
          /* $map aplica uma expressão a cada item em um array e retorna outro array, ou seja,
          no campo input é o antigo array "especialidades" e retorna outro array agora como "especialidade".
          O campo in representa cada elemento desse novo array e define que todos os elementos que estão 
          dentro do array especialidade seja minusculas. Tornando-as case insensetive
          */
        ]
      }
    }
  }
])

//9

db.consultas.aggregate([
  {
    $group: {
      _id: "$Medico_responsavel_id",
      numConsulta: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "medicos",
      localField: "_id",
      foreignField: "_id",
      as: "medico_info"
    }
  },
  {
    $unwind: "$medico_info"
  },
  {
    $project: {
      "medico_nome": "$medico_info.nome",
      "medico_CRM": "$medico_info.documentos.CRM",
      numConsulta: 1
    }
  }
])

//10

db.medicos.find(
  { nome: /Gabriel/i }
)

//11

db.internacao.aggregate([
  {
    $unwind: "$Enfermeiros_responsaveis"
  },
  {
    $group: {
      _id: "$Enfermeiros_responsaveis",
      numInternacao: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "enfermeiros",
      localField: "_id", // A lista de enfermeiros responsaveis foi destruida e reconstruida em um objeto, fazendo com o que antes era 0, 1 seja _id, _id
      foreignField: "_id",
      as: "enfermeiro_info"
    }
  },
  {
    $unwind: "$enfermeiro_info"
  },
  {
    $project: {
      "enfermeiro_nome": "$enfermeiro_info.nome",
      "enfermeiro_COREN": "$enfermeiro_info.Registro_COREN",
      numInternacao: 1
    }
  }
])