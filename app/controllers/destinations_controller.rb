class DestinationsController < ApplicationController

    def index
        destinations = Destination.all
        render json: destinations
    end

    def show
        destination = Destination.find_by(id: params[:id])
        if destination
            render json: destination
        else 
            render json: {error: "Destination not found"}, status: :not_found
        end
    end

    def create 
        destination = Destination.create(country: params[:country], city: params[:city], star_rating: params[:star_rating])
        render json: destination, status: :created
    end
end