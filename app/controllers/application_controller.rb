class ApplicationController < ActionController::API

  include ActionController::Cookies

rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity


# rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found


  before_action :authorized

  def encode_token(payload)
    JWT.encode(payload, 'password')
end
def decoded_token
    header = request.headers['Authorization']
    if header
        token = header.split(" ")[1]
        begin
            JWT.decode(token, 'password')
        rescue JWT::DecodeError
            nil
        end
    end
end
def current_user
    if decoded_token
        user_id = decoded_token[0]['user_id']
@user = User.find_by(id: user_id)
    end
end
def authorized
    unless !!current_user
    render json: { message: 'Please log in' }, status: :unauthorized
    end




    def render_unprocessable_entity(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end







  # def current_user
  #   User.find_by(id: session[:user_id])
  #   end

  #   def authorize
  #     render json: {errors:["Not authorized"]}, status: :unauthorized unless current_user
  #   end

  #   private 

  #  def render_invalid_response(invalid)
  #   render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  #  end
  #  def render_not_found_response(error)
  #   render json: {errors: "#{error.model} not found"}, status: :not_found
  #  end
end
end
