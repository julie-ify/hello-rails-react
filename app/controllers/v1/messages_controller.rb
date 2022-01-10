class V1::MessagesController < ApplicationController
  def index
    @message = Message.all.order('random()').limit(1)
    render json: { :greeting => @message }.to_json
  end 
end
