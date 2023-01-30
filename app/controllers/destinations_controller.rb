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
        destination = Destination.create(add_destination)
        render json: destination, status: :created
    end

    def destroy
        destination = Destination.find_by(id: params[:id])
        destination.destroy
        head :no_content
    end
end

private

def add_destination
    params.permit(:country, :city, :star_rating, :attractions)
end