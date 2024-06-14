import { body } from "express-validator";

export const validateJob = [
    body("title", "O nome do cargo não pode ser vazio!")
    .isString()
    .withMessage("O título da vaga deve ser um texto!")
    .trim()
    .not()
    .isEmpty()
    .isLength({ min: 3 })
    .withMessage("O tamanho mínimo do título é de 3 caracteres"),

    body("description", "A descrição da vaga não pode ser vazia")
    .isString()
    .withMessage("A descrição da vaga deve ser um texto!")
    .trim()
    .not()
    .isEmpty()
    .isLength({ min: 10 })
    .withMessage("O tamanho mínimo da descrição é 10 caracteres"),

    body("company", "A empresa não pode ser vazia")
    .isString()
    .withMessage("A empresa deve ser um texto!")
    .trim()
    .not()
    .isEmpty()
    .isLength({ min: 3 })
    .withMessage("O tamanho mínimo da empresa é de 3 caracteres"),

    body("location", "A localização da vaga não pode ser vazia")
    .isString()
    .withMessage("A localização da vaga deve ser um texto!")
    .trim()
    .not()
    .isEmpty()
    .isLength({ min: 3 })
    .withMessage("O tamanho mínimo do local é de 3 caracteres"),

    body("salary", "O salário não deve ser vazio!")
    .isNumeric()
    .withMessage("O salário deve ser preenchido! (Se não informado, coloque 0 (zero)")
];