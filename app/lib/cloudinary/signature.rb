require 'digest/sha1'

class Cloudinary::Signature
  attr_reader :params, :signature

  def initialize(params)
    @params = params
  end

  def signature
    @signature ||= Digest::SHA1.hexdigest signature_params
  end

  private

  def signature_params
    @params
      .except(:file, :type, :resource_type, :api_key)
      .sort
      .map{|pair| pair.join('=')}
      .join('&') + api_secret
  end

  def api_secret
    ENV['CLOUDINARY_API_SECRET']
  end
end
