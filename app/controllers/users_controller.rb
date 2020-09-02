class UsersController < ApplicationController
    def index
        users = User.all
        render json: users
    end

    def create
        user = User.create(name: params[:name], age: params[:age])
        if user.valid?
            render json: user
        else
            render json: {error: "That user already exists"}
        end
    end


    def login
        user = User.find_by(name: params[:name])
        if user
            render json: user
        else
            render json: {error: "that user doesn't exist"}
        end
    end

    def show
        user = User.find_by(id: params[:id])
        render json: user
    end
end
