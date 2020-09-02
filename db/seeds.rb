# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Game.destroy_all


akil = User.create!(name: "Akil", age: 30)
john = User.create!(name: "John", age: 24)
cerrada = User.create!(name: "Cerrada", age: 26)
aizrael = User.create!(name: "Aizrael", age: 40)
toby = User.create!(name: "Toby", age: 23)

dd = Game.create!(
    name: "Dragon's Dogma",
    genre: "Action-adventure",
    developer: "Capcom",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/DragonsDogma.jpg/220px-DragonsDogma.jpg",
    esrb: "M",
)

me2 = Game.create!(
    name: "Mass Effect 2",
    genre: "Action-adventure, Sci-fi",
    developer: "Bioware",
    img: "https://onlysp.escapistmagazine.com/wp-content/uploads/2019/10/Mass-Effect-2-game-art.png",
    esrb: "M",
)

dcuo = Game.create!(
    name: "DCUO",
    genre: "mmo",
    developer: "DayBreak",
    img: "https://mms.businesswire.com/media/20190806005227/en/736813/5/DCUO_KeyArt_Final_1920x1080.jpg",
    esrb: "E",
)

ctr = Game.create!(
    name: "Crash Team Racing",
    genre: "Racing",
    developer: "Activision",
    img: "https://media.playstation.com/is/image/SCEA/crash-team-racing-nitro-fueled-normal-hero-background-01-ps4-us-23jun19?$native_nt$",
    esrb: "E",
)

tekken7 = Game.create!(
    name: "Tekken 7",
    genre: "Fighting",
    developer: "Bandai Namco",
    img: "https://tekkengamer.com/wp-content/uploads/2017/03/eddy-gordo-tekken-7-reactions.jpg",
    esrb: "E",
)

tlou2 = Game.create!(
    name: "The Last of Us 2",
    genre: "GOAT",
    developer: "Naughty Dog",
    img: "https://venturebeat.com/wp-content/uploads/2020/06/tlou-part-ii.jpg?w=1200&strip=all",
    esrb: "M",
)

sleeping_dogs = Game.create!(
    name: "Sleeping Dogs",
    genre: "Action Adventure",
    developer: "Square Enix",
    img: "https://gamespot1.cbsistatic.com/uploads/scale_landscape/mig/0/4/1/2/2120412-169_sleeping_dogs_vr_b_4000.jpg",
    esrb: "M",
)


