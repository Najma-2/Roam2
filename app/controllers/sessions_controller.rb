class SessionsController < ApplicationController
    skip_before_action :authorize, only: :login
    
    def login
        user = User.find_by(name: params[:name])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        
        else 
            render json: {errors:["invalid name or password"]}, status: :unauthorized
        end
    
    end
    
    def logout
        session.delete :user_id 
        head :no_content
    end
    
    end