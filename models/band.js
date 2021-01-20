const {v4: uuidv4} = require(uuid);


class Band{
    constructo(name = 'no-name'){

        this.id = uuidv4(); //        identificador único
        this.name = name;
        this.votes = 0;
    }
}

module.exports = Band;