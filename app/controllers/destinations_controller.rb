class DestinationsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found

    def index
        destinations = Destination.all
        render json: destinations
    end

    def show
        destination = Destination.find_by(id: params[:id])
        if destination
            render json: destination, serializer: DestinationSerializer
        else 
            render json: {error: "Destination not found"}, status: :not_found
        end
    end


    def destroy
        destination = Destination.find_by(id: params[:id])
        destination.destroy
        head :no_content

    end

    def update
        destination = Destination.find_by(id: params[:id])
        destination.update!(create_destinations_params)
        render json: destination
    end







    def create 
        destination = Destination.create!(create_destinations_params)
        render json: destination, status: :created
    end


private

def create_destinations_params
params.permit(:country, :city, :star_rating, :img)

end


def render_record_not_found
        render json: { error: " Destination not found" }, status: :not_found
    end



end