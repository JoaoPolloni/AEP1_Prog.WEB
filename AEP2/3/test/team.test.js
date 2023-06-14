import {describe, expect, test} from '@jest/globals';
import teamService from '../src/team/team.service';


describe("Funções disponíveis para o gerenciamento de times pokemons", () => {

    test("Deve criar um time pokemon", async () => {

        expect(await teamService.createTeam({"trainerName": "Akio",
        "team": [
          {
            "name": "{\"name\":\"squirtle\",\"types\":[\"water\"],\"stats\":[{\"statName\":\"hp\",\"value\":44},{\"statName\":\"attack\",\"value\":48},{\"statName\":\"defense\",\"value\":65},{\"statName\":\"special-attack\",\"value\":50},{\"statName\":\"special-defense\",\"value\":64},{\"statName\":\"speed\",\"value\":43}],\"dex\":7,\"height\":5,\"weight\":90,\"moves\":[{\"moves\":\"dive\"},{\"moves\":\"surf\"},{\"moves\":\"rage\"},{\"moves\":\"bubble\"}],\"_id\":\"644671b284f08d648b184624\",\"__v\":0,\"createdAt\":\"2023-04-24T12:10:26.455Z\",\"updatedAt\":\"2023-04-24T12:10:26.455Z\"}",
            "_id": "6446bc540b61c36f02c84cd3"
          },
          {
            "name": "{\"name\":\"bulbasaur\",\"types\":[\"grass\",\"poison\"],\"stats\":[{\"statName\":\"hp\",\"value\":45},{\"statName\":\"attack\",\"value\":49},{\"statName\":\"defense\",\"value\":49},{\"statName\":\"special-attack\",\"value\":65},{\"statName\":\"special-defense\",\"value\":65},{\"statName\":\"speed\",\"value\":45}],\"dex\":1,\"height\":7,\"weight\":69,\"moves\":[{\"moves\":\"string-shot\"},{\"moves\":\"sleep-talk\"},{\"moves\":\"headbutt\"},{\"moves\":\"solar-beam\"}],\"_id\":\"644671b284f08d648b1845ec\",\"__v\":0,\"createdAt\":\"2023-04-24T12:10:26.333Z\",\"updatedAt\":\"2023-04-24T12:10:26.333Z\"}",
            "_id": "6446bc540b61c36f02c84cd4"
          },
          {
            "name": "{\"name\":\"charizard\",\"types\":[\"fire\",\"flying\"],\"stats\":[{\"statName\":\"hp\",\"value\":78},{\"statName\":\"attack\",\"value\":84},{\"statName\":\"defense\",\"value\":78},{\"statName\":\"special-attack\",\"value\":109},{\"statName\":\"special-defense\",\"value\":85},{\"statName\":\"speed\",\"value\":100}],\"dex\":6,\"height\":17,\"weight\":905,\"moves\":[{\"moves\":\"dragon-claw\"},{\"moves\":\"take-down\"},{\"moves\":\"roar\"},{\"moves\":\"scratch\"}],\"_id\":\"644671b284f08d648b18468e\",\"__v\":0,\"createdAt\":\"2023-04-24T12:10:26.704Z\",\"updatedAt\":\"2023-04-24T12:10:26.704Z\"}",
            "_id": "6446bc540b61c36f02c84cd5"
          },
          {
            "name": "{\"name\":\"mew\",\"types\":[\"psychic\"],\"stats\":[{\"statName\":\"hp\",\"value\":100},{\"statName\":\"attack\",\"value\":100},{\"statName\":\"defense\",\"value\":100},{\"statName\":\"special-attack\",\"value\":100},{\"statName\":\"special-defense\",\"value\":100},{\"statName\":\"speed\",\"value\":100}],\"dex\":151,\"height\":4,\"weight\":40,\"moves\":[{\"moves\":\"drill-run\"},{\"moves\":\"fire-fang\"},{\"moves\":\"air-slash\"},{\"moves\":\"stone-edge\"}],\"_id\":\"644671b284f08d648b1846ae\",\"__v\":0,\"createdAt\":\"2023-04-24T12:10:26.806Z\",\"updatedAt\":\"2023-04-24T12:10:26.806Z\"}",
            "_id": "6446bc540b61c36f02c84cd6"
          },
          {
            "name": "{\"name\":\"rattata\",\"types\":[\"normal\"],\"stats\":[{\"statName\":\"hp\",\"value\":30},{\"statName\":\"attack\",\"value\":56},{\"statName\":\"defense\",\"value\":35},{\"statName\":\"special-attack\",\"value\":25},{\"statName\":\"special-defense\",\"value\":35},{\"statName\":\"speed\",\"value\":72}],\"dex\":19,\"height\":3,\"weight\":35,\"moves\":[{\"moves\":\"revenge\"},{\"moves\":\"pluck\"},{\"moves\":\"wild-charge\"},{\"moves\":\"secret-power\"}],\"_id\":\"644671b284f08d648b1845f2\",\"__v\":0,\"createdAt\":\"2023-04-24T12:10:26.345Z\",\"updatedAt\":\"2023-04-24T12:10:26.345Z\"}",
            "_id": "6446bc540b61c36f02c84cd7"
          },
          {
            "name": "{\"name\":\"pikachu\",\"types\":[\"electric\"],\"stats\":[{\"statName\":\"hp\",\"value\":35},{\"statName\":\"attack\",\"value\":55},{\"statName\":\"defense\",\"value\":40},{\"statName\":\"special-attack\",\"value\":50},{\"statName\":\"special-defense\",\"value\":50},{\"statName\":\"speed\",\"value\":90}],\"dex\":25,\"height\":4,\"weight\":60,\"moves\":[{\"moves\":\"take-down\"},{\"moves\":\"rock-smash\"},{\"moves\":\"uproar\"},{\"moves\":\"natural-gift\"}],\"_id\":\"644671b284f08d648b184650\",\"__v\":0,\"createdAt\":\"2023-04-24T12:10:26.553Z\",\"updatedAt\":\"2023-04-24T12:10:26.553Z\"}",
            "_id": "6446bc540b61c36f02c84cd8"
          }]})).toBe(true)

    })

    test("Deve listar todos os times pokemons", async () => {
        expect(await teamService.list()).toBe(Array<Object>)
    })

    test("Deve encontrar um time através do id", async () => {
        expect(await teamService.find("6446bc540b61c36f02c84cd2")).toBe(Object)
    })

    test("Deve atualizar um time através do id", async() => {
        expect(await teamService.update({"trainerName": "Akio",
        "team": [
          {
            "name": "{\"name\":\"squirtle\",\"types\":[\"water\"],\"stats\":[{\"statName\":\"hp\",\"value\":44},{\"statName\":\"attack\",\"value\":48},{\"statName\":\"defense\",\"value\":65},{\"statName\":\"special-attack\",\"value\":50},{\"statName\":\"special-defense\",\"value\":64},{\"statName\":\"speed\",\"value\":43}],\"dex\":7,\"height\":5,\"weight\":90,\"moves\":[{\"moves\":\"dive\"},{\"moves\":\"surf\"},{\"moves\":\"rage\"},{\"moves\":\"bubble\"}],\"_id\":\"644671b284f08d648b184624\",\"__v\":0,\"createdAt\":\"2023-04-24T12:10:26.455Z\",\"updatedAt\":\"2023-04-24T12:10:26.455Z\"}",
            "_id": "6446bc540b61c36f02c84cd3"
          },
          {
            "name": "{\"name\":\"bulbasaur\",\"types\":[\"grass\",\"poison\"],\"stats\":[{\"statName\":\"hp\",\"value\":45},{\"statName\":\"attack\",\"value\":49},{\"statName\":\"defense\",\"value\":49},{\"statName\":\"special-attack\",\"value\":65},{\"statName\":\"special-defense\",\"value\":65},{\"statName\":\"speed\",\"value\":45}],\"dex\":1,\"height\":7,\"weight\":69,\"moves\":[{\"moves\":\"string-shot\"},{\"moves\":\"sleep-talk\"},{\"moves\":\"headbutt\"},{\"moves\":\"solar-beam\"}],\"_id\":\"644671b284f08d648b1845ec\",\"__v\":0,\"createdAt\":\"2023-04-24T12:10:26.333Z\",\"updatedAt\":\"2023-04-24T12:10:26.333Z\"}",
            "_id": "6446bc540b61c36f02c84cd4"
          },
          {
            "name": "{\"name\":\"charizard\",\"types\":[\"fire\",\"flying\"],\"stats\":[{\"statName\":\"hp\",\"value\":78},{\"statName\":\"attack\",\"value\":84},{\"statName\":\"defense\",\"value\":78},{\"statName\":\"special-attack\",\"value\":109},{\"statName\":\"special-defense\",\"value\":85},{\"statName\":\"speed\",\"value\":100}],\"dex\":6,\"height\":17,\"weight\":905,\"moves\":[{\"moves\":\"dragon-claw\"},{\"moves\":\"take-down\"},{\"moves\":\"roar\"},{\"moves\":\"scratch\"}],\"_id\":\"644671b284f08d648b18468e\",\"__v\":0,\"createdAt\":\"2023-04-24T12:10:26.704Z\",\"updatedAt\":\"2023-04-24T12:10:26.704Z\"}",
            "_id": "6446bc540b61c36f02c84cd5"
          },
          {
            "name": "{\"name\":\"mew\",\"types\":[\"psychic\"],\"stats\":[{\"statName\":\"hp\",\"value\":100},{\"statName\":\"attack\",\"value\":100},{\"statName\":\"defense\",\"value\":100},{\"statName\":\"special-attack\",\"value\":100},{\"statName\":\"special-defense\",\"value\":100},{\"statName\":\"speed\",\"value\":100}],\"dex\":151,\"height\":4,\"weight\":40,\"moves\":[{\"moves\":\"drill-run\"},{\"moves\":\"fire-fang\"},{\"moves\":\"air-slash\"},{\"moves\":\"stone-edge\"}],\"_id\":\"644671b284f08d648b1846ae\",\"__v\":0,\"createdAt\":\"2023-04-24T12:10:26.806Z\",\"updatedAt\":\"2023-04-24T12:10:26.806Z\"}",
            "_id": "6446bc540b61c36f02c84cd6"
          },
          {
            "name": "{\"name\":\"rattata\",\"types\":[\"normal\"],\"stats\":[{\"statName\":\"hp\",\"value\":30},{\"statName\":\"attack\",\"value\":56},{\"statName\":\"defense\",\"value\":35},{\"statName\":\"special-attack\",\"value\":25},{\"statName\":\"special-defense\",\"value\":35},{\"statName\":\"speed\",\"value\":72}],\"dex\":19,\"height\":3,\"weight\":35,\"moves\":[{\"moves\":\"revenge\"},{\"moves\":\"pluck\"},{\"moves\":\"wild-charge\"},{\"moves\":\"secret-power\"}],\"_id\":\"644671b284f08d648b1845f2\",\"__v\":0,\"createdAt\":\"2023-04-24T12:10:26.345Z\",\"updatedAt\":\"2023-04-24T12:10:26.345Z\"}",
            "_id": "6446bc540b61c36f02c84cd7"
          },
          {
            "name": "{\"name\":\"pikachu\",\"types\":[\"electric\"],\"stats\":[{\"statName\":\"hp\",\"value\":35},{\"statName\":\"attack\",\"value\":55},{\"statName\":\"defense\",\"value\":40},{\"statName\":\"special-attack\",\"value\":50},{\"statName\":\"special-defense\",\"value\":50},{\"statName\":\"speed\",\"value\":90}],\"dex\":25,\"height\":4,\"weight\":60,\"moves\":[{\"moves\":\"take-down\"},{\"moves\":\"rock-smash\"},{\"moves\":\"uproar\"},{\"moves\":\"natural-gift\"}],\"_id\":\"644671b284f08d648b184650\",\"__v\":0,\"createdAt\":\"2023-04-24T12:10:26.553Z\",\"updatedAt\":\"2023-04-24T12:10:26.553Z\"}",
            "_id": "6446bc540b61c36f02c84cd8"
          }]})).toBe(Object)
    })

    test("Deve deletar um time através do id", async () => {
        expect(await teamService.delete("6446bc540b61c36f02c84cd2")).toBe(true)
    })

    test("Deve encontrar um time através do nome do treinador", async() => {
        expect(await teamService.findTrainer("Akio")).toBe(Array<Object>)
    })

    test("Deve atualizar um time através do nome do treinador", async() => {
        expect(await teamService.updateByTrainer("Akio", {"trainerName": "Akio",
        "team": [
          {
            "name": "{\"name\":\"squirtle\",\"types\":[\"water\"],\"stats\":[{\"statName\":\"hp\",\"value\":44},{\"statName\":\"attack\",\"value\":48},{\"statName\":\"defense\",\"value\":65},{\"statName\":\"special-attack\",\"value\":50},{\"statName\":\"special-defense\",\"value\":64},{\"statName\":\"speed\",\"value\":43}],\"dex\":7,\"height\":5,\"weight\":90,\"moves\":[{\"moves\":\"dive\"},{\"moves\":\"surf\"},{\"moves\":\"rage\"},{\"moves\":\"bubble\"}],\"_id\":\"644671b284f08d648b184624\",\"__v\":0,\"createdAt\":\"2023-04-24T12:10:26.455Z\",\"updatedAt\":\"2023-04-24T12:10:26.455Z\"}",
            "_id": "6446bc540b61c36f02c84cd3"
          },
          {
            "name": "{\"name\":\"bulbasaur\",\"types\":[\"grass\",\"poison\"],\"stats\":[{\"statName\":\"hp\",\"value\":45},{\"statName\":\"attack\",\"value\":49},{\"statName\":\"defense\",\"value\":49},{\"statName\":\"special-attack\",\"value\":65},{\"statName\":\"special-defense\",\"value\":65},{\"statName\":\"speed\",\"value\":45}],\"dex\":1,\"height\":7,\"weight\":69,\"moves\":[{\"moves\":\"string-shot\"},{\"moves\":\"sleep-talk\"},{\"moves\":\"headbutt\"},{\"moves\":\"solar-beam\"}],\"_id\":\"644671b284f08d648b1845ec\",\"__v\":0,\"createdAt\":\"2023-04-24T12:10:26.333Z\",\"updatedAt\":\"2023-04-24T12:10:26.333Z\"}",
            "_id": "6446bc540b61c36f02c84cd4"
          },
          {
            "name": "{\"name\":\"charizard\",\"types\":[\"fire\",\"flying\"],\"stats\":[{\"statName\":\"hp\",\"value\":78},{\"statName\":\"attack\",\"value\":84},{\"statName\":\"defense\",\"value\":78},{\"statName\":\"special-attack\",\"value\":109},{\"statName\":\"special-defense\",\"value\":85},{\"statName\":\"speed\",\"value\":100}],\"dex\":6,\"height\":17,\"weight\":905,\"moves\":[{\"moves\":\"dragon-claw\"},{\"moves\":\"take-down\"},{\"moves\":\"roar\"},{\"moves\":\"scratch\"}],\"_id\":\"644671b284f08d648b18468e\",\"__v\":0,\"createdAt\":\"2023-04-24T12:10:26.704Z\",\"updatedAt\":\"2023-04-24T12:10:26.704Z\"}",
            "_id": "6446bc540b61c36f02c84cd5"
          },
          {
            "name": "{\"name\":\"mew\",\"types\":[\"psychic\"],\"stats\":[{\"statName\":\"hp\",\"value\":100},{\"statName\":\"attack\",\"value\":100},{\"statName\":\"defense\",\"value\":100},{\"statName\":\"special-attack\",\"value\":100},{\"statName\":\"special-defense\",\"value\":100},{\"statName\":\"speed\",\"value\":100}],\"dex\":151,\"height\":4,\"weight\":40,\"moves\":[{\"moves\":\"drill-run\"},{\"moves\":\"fire-fang\"},{\"moves\":\"air-slash\"},{\"moves\":\"stone-edge\"}],\"_id\":\"644671b284f08d648b1846ae\",\"__v\":0,\"createdAt\":\"2023-04-24T12:10:26.806Z\",\"updatedAt\":\"2023-04-24T12:10:26.806Z\"}",
            "_id": "6446bc540b61c36f02c84cd6"
          },
          {
            "name": "{\"name\":\"rattata\",\"types\":[\"normal\"],\"stats\":[{\"statName\":\"hp\",\"value\":30},{\"statName\":\"attack\",\"value\":56},{\"statName\":\"defense\",\"value\":35},{\"statName\":\"special-attack\",\"value\":25},{\"statName\":\"special-defense\",\"value\":35},{\"statName\":\"speed\",\"value\":72}],\"dex\":19,\"height\":3,\"weight\":35,\"moves\":[{\"moves\":\"revenge\"},{\"moves\":\"pluck\"},{\"moves\":\"wild-charge\"},{\"moves\":\"secret-power\"}],\"_id\":\"644671b284f08d648b1845f2\",\"__v\":0,\"createdAt\":\"2023-04-24T12:10:26.345Z\",\"updatedAt\":\"2023-04-24T12:10:26.345Z\"}",
            "_id": "6446bc540b61c36f02c84cd7"
          },
          {
            "name": "{\"name\":\"pikachu\",\"types\":[\"electric\"],\"stats\":[{\"statName\":\"hp\",\"value\":35},{\"statName\":\"attack\",\"value\":55},{\"statName\":\"defense\",\"value\":40},{\"statName\":\"special-attack\",\"value\":50},{\"statName\":\"special-defense\",\"value\":50},{\"statName\":\"speed\",\"value\":90}],\"dex\":25,\"height\":4,\"weight\":60,\"moves\":[{\"moves\":\"take-down\"},{\"moves\":\"rock-smash\"},{\"moves\":\"uproar\"},{\"moves\":\"natural-gift\"}],\"_id\":\"644671b284f08d648b184650\",\"__v\":0,\"createdAt\":\"2023-04-24T12:10:26.553Z\",\"updatedAt\":\"2023-04-24T12:10:26.553Z\"}",
            "_id": "6446bc540b61c36f02c84cd8"
          }]})).toBe(Object)
    })

    test("Deve deletar um time através do nome do treinador", async() => {
        expect(await teamService.delete("Akio")).toBe(true)
    })









})