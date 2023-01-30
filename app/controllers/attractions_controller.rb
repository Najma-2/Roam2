class AttractionsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found

def index 
    attractions = Attraction.all
        render json: attractions
    end


    def show
        attractions = Attraction.find_by(id: params[:id])
        if attractions
            render json: attractions, serializer: AttractionSerializer
        else 
            render json: {error: "Attraction not found"}, status: :not_found
        end
    end


    def destroy
        attractions = Attraction.find_by(id: params[:id])
        attractions.destroy
        head :no_content

    end

    def update
        attractions = Attraction.find_by(id: params[:id])
        attractions.update!(update_attractions_params)
        render json: attractions
    end


    def create 
        attractions = Attraction.create!(create_attractions_params)
        render json: attractions, status: :created
    end


    private

    def create_attractions_params
        params.permit(:location, :rating, :img, :user_id, :destintation_id)

end


def update_attractions_params
    params.permit(:location, :rating, :img)
end


def render_record_not_found
    render json: { error: " Attraction not found" }, status: :not_found
end

end
