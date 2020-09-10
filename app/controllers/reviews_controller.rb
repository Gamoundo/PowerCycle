class ReviewsController < ApplicationController
    def index
        reviews = Review.all
        render json: reviews
    end

    def create
        reviews = Review.select{|review| review.game_id == params[:game_id]}
        review = reviews.select{|review| review.user_id === params[:user_id]}
        
        if review.length > 0
            render json: {error: "Only one review per game"}
        else
            review = Review.create(
            rating: params[:rating], 
            body: params[:body], 
            user_id: params[:user_id], 
            game_id: params[:game_id]
            )
            render json: review
        end
        
        
        

    end

    def update
        review = Review.find_by(id: params[:id])
        review.rating = params[:rating]
        review.body = params[:body]
        review.save
        render json: review
    end

    def destroy
        review = Review.find_by(id: params[:id])
        review.destroy
    end
end
