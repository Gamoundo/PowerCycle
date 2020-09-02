class ReviewsController < ApplicationController
    def index
        reviews = Review.all
        render json: reviews
    end

    def create
        review = Review.create(
            rating: params[:rating], 
            body: params[:body], 
            user_id: params[:user_id], 
            game_id: params[:game_id]
            )
            render json: review

    end

    def destroy
        review = Review.find_by(id: params[:id])
        review.destroy
    end
end
