class CloudinaryController < ApplicationController

  def new
    signature = Cloudinary::Signature.new(upload_params).signature
    render json: upload_params.merge(signature: signature)
  end

  private

  def upload_params
    params.permit(:timestamp, :api_key, :callback).to_h
  end
end
