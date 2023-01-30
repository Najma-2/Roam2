class AttractionsController < ApplicationController
    def show
        attractions = Attraction.find_by(id: params[:id])
        if attractions
            render json: attractions
        else 
            render json: {error: "Attraction not found"}, status: :not_found
        end
    end

    def create 
        attraction = Attraction.create(location: params[:location], rating: params[:rating], destination_id: params[:destination_id], user_id: params[:user_id])
        render json: attraction, status: :created
    end

    def destroy
        attraction = Attraction.find_by(id: params[:id])
        attraction.destroy
        head :no_content
    end
end
