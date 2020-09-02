class GamesController < ApplicationController
    def index
        games = Game.all
        render json: games
    end

    def create
        game = Game.create(name: params[:name], genre: params[:genre], developer: params[:developer], img: params[:img], esrb: params[:esrb])
        render json: game
    end
end
