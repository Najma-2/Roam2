class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found

    # skip_before_action :authorized, only: :create
        def create
            user = User.create!(create_user_params)
            session[:user_id] = user.id
            token = encode_token({user_id: user.id})
            render json: {user: UserSerializer.new(user), jwt: token}, status: :created
        end

        def index
            users = User.all
            render json: users, status: :ok
        end
    
        def me
            render json: current_user, status: :ok
        end

        def update
            user = find_user
            user.update!(update_user_params)
            render json: user
        end

        def destroy
            user = find_user
            user.destroy
            head :no_content
    
        end

    
        def show
            user = find_user
            render json: user, serializer: UserSerializer
        end
        
    
        private 
    
        def update_user_params 
            params.permit(:username, :name, :img)
        end

        def create_user_params
            params.permit(:name, :password)
        end
    

        def find_user
            user = User.find(params[:id])
        end

        def render_record_not_found
            render json: { error: " User not found" }, status: :not_found
        end
    end
