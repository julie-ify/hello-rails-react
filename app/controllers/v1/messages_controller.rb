class V1::MessagesController < ApplicationController
  def index
    render json: {:messages => [
      {
        :message => 'some-thing',
      },
      {
        :message => 'some-thing2',
      }
    ]}.to_json
  end
end
